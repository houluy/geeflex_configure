<script lang="ts" setup>
import { h } from 'vue'

import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons-vue'

import CustomArray from './CustomArray.vue'
import CustomBoolean from './CustomBoolean.vue'
import CustomField from './CustomField.vue'
import CustomInput from './CustomInput.vue'
import CustomInputNumber from './CustomInputNumber.vue'
import CustomSimpleArray from './CustomSimpleArray.vue'

interface TableProps {
  table: any[]
  columns: any[]
}

const props = defineProps<TableProps>()
const emit = defineEmits(['update:table'])

const handleValueChange = (record: any, value: any) => {
  const updatedTable = props.table.map((item) =>
    item.key === record.key ? { ...item, value } : item,
  )
  emit('update:table', [...updatedTable])
}

const expandIcon = (propsval: any) => {
  if (propsval.record.hasChildren) {
    return h(
      'span',
      {
        class: 'expand-icon-wrapper',
        onClick: (e) => {
          propsval.onExpand(propsval.record, e)
        },
      },
      [
        h(propsval.expanded ? CaretDownOutlined : CaretRightOutlined, {
          class: 'expand-icon',
        }),
      ],
    )
  }
  return null
}
</script>

<template>
  <a-table
    :columns="props.columns"
    :data-source="props.table"
    :expand-icon="expandIcon"
    :pagination="false"
    class="components-table-demo-nested"
    size="small"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'key'">
        <CustomField :title="record.key" />
      </template>
      <template v-else>
        <template v-if="record.type === 'string'">
          <CustomInput
            v-model:input="record.value"
            :tooltip-title="record.tooltipTitle"
          />
        </template>
        <template v-else-if="record.type === 'number'">
          <CustomInputNumber
            v-model:input="record.value"
            :tooltip-title="record.tooltipTitle"
          />
        </template>
        <template v-else-if="record.type === 'boolean'">
          <CustomBoolean
            v-model:input="record.value"
            :tooltip-title="record.tooltipTitle"
          />
        </template>
        <template v-else-if="record.type === 'simple_array'">
          <CustomSimpleArray
            v-model:value="record.value"
            :tooltip-title="record.tooltipTitle"
          />
        </template>
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <template v-if="record.type === 'object'">
        <CustomObj
          :columns="record.childrenColumn"
          :table="record.childrenTable"
          @update:table="
            (val) =>
              handleValueChange(record, { ...record, childrenTable: val })
          "
        />
      </template>
      <template v-else-if="record.type === 'array'">
        <CustomArray
          :columns="record.childrenColumn"
          :table="record.childrenTable"
          @update:table="
            (val) =>
              handleValueChange(record, { ...record, childrenTable: val })
          "
        />
      </template>
    </template>
  </a-table>
</template>
