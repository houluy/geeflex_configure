<script lang="ts" setup>
import type { ColumnType } from '#/typing'

import { computed, h } from 'vue'

import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons-vue'

import CustomBoolean from './CustomBoolean.vue'
import CustomInput from './CustomInput.vue'
import CustomInputNumber from './CustomInputNumber.vue'
import CustomObj from './CustomObj.vue'

interface ArrayProps {
  columns: ColumnType[]
  table: any[]
}

const props = defineProps<ArrayProps>()
const emit = defineEmits(['update:table'])

// 获取第一行数据结构用于创建新行
const firstRowStructure = computed(() => {
  if (!props.table?.length) return null

  const firstRow = props.table[0]
  const structure = {}

  Object.entries(firstRow).forEach(([key, field]: [string, any]) => {
    if (key !== 'key') {
      const defaultValue = (() => {
        if (field.type === 'number') return 0
        if (field.type === 'boolean') return false
        return ''
      })()

      structure[key] = {
        type: field.type,
        value: defaultValue,
        tooltipTitle: `${key}-tooltip`,
      }

      if (field.type === 'object' || field.type === 'array') {
        structure[key].childrenColumn = field.childrenColumn
        structure[key].childrenTable = []
      }
    }
  })

  return structure
})

// 处理值变更
const handleValueChange = (val: any, record: any, field: string) => {
  const updatedTable = props.table.map((item) => {
    if (item.key === record.key) {
      const updatedField = { ...item[field] }
      if (val.childrenTable === undefined) {
        updatedField.value = val
      } else {
        updatedField.childrenTable = val.childrenTable
      }
      return { ...item, [field]: updatedField }
    }
    return item
  })
  emit('update:table', updatedTable)
}

// 添加新行
const handleAddRow = (index: number) => {
  if (!firstRowStructure.value) return

  const newRow = {
    key: `new-${Date.now()}`,
    ...structuredClone(firstRowStructure.value),
  }

  const updatedTable = [...props.table]
  updatedTable.splice(index + 1, 0, newRow)
  emit('update:table', updatedTable)
}

// 删除行
const handleDeleteRow = (index: number) => {
  if (props.table.length > 1) {
    const updatedTable = [...props.table]
    updatedTable.splice(index, 1)
    emit('update:table', updatedTable)
  }
}

// 扩展列配置，添加增加和删除按钮列
const extendedColumns = computed(() => [
  {
    title: '',
    key: 'add',
    width: 50,
    dataIndex: 'add', // 添加 dataIndex
    customRender: ({ index }) =>
      h(
        'div',
        { style: 'display: flex; justify-content: center;' },
        h(PlusCircleOutlined, {
          style: 'cursor: pointer; color: #1890ff; font-size: 16px;',
          onClick: () => handleAddRow(index),
        }),
      ),
  },
  ...props.columns.map((column) => ({
    ...column,
    dataIndex: Array.isArray(column.dataIndex)
      ? column.dataIndex
      : [column.dataIndex],
  })),
  {
    title: '',
    key: 'delete',
    width: 50,
    dataIndex: 'delete', // 添加 dataIndex
    customRender: ({ index }) =>
      h(
        'div',
        { style: 'display: flex; justify-content: center;' },
        h(DeleteOutlined, {
          style: 'cursor: pointer; color: #ff4d4f; font-size: 16px;',
          onClick: () => handleDeleteRow(index),
        }),
      ),
  },
])
</script>

<template>
  <a-table
    :columns="extendedColumns"
    :data-source="props.table"
    :pagination="false"
    size="small"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex?.[0] && record[column.dataIndex[0]]">
        <component
          :is="
            record[column.dataIndex[0]].type === 'string'
              ? CustomInput
              : record[column.dataIndex[0]].type === 'number'
                ? CustomInputNumber
                : record[column.dataIndex[0]].type === 'boolean'
                  ? CustomBoolean
                  : record[column.dataIndex[0]].type === 'object'
                    ? CustomObj
                    : null
          "
          v-if="record[column.dataIndex[0]].type !== 'object'"
          v-model:input="record[column.dataIndex[0]].value"
          :tooltip-title="record[column.dataIndex[0]].tooltipTitle"
          @update:input="
            (val) => handleValueChange(val, record, column.dataIndex[0])
          "
        />
        <CustomObj
          v-else
          :columns="record[column.dataIndex[0]].childrenColumn"
          :table="record[column.dataIndex[0]].childrenTable"
          @update:table="
            (val) =>
              handleValueChange(
                { childrenTable: val },
                record,
                column.dataIndex[0],
              )
          "
        />
      </template>
    </template>
  </a-table>
</template>

<style scoped>
.components-table-demo-nested {
  width: 100%;
}
</style>
