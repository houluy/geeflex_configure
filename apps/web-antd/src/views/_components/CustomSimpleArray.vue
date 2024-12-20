<script lang="ts" setup>
import type { ColumnType } from '#/typing'

import { computed } from 'vue'

import CustomInputNumber from './CustomInputNumber.vue'

interface SimpleArrayProps {
  value: number[]
  tooltipTitle?: string
}

const props = defineProps<SimpleArrayProps>()
const emit = defineEmits(['update:value'])

const columns = computed<ColumnType[]>(() => [
  { title: '索引', dataIndex: 'index', width: '100px' },
  { title: '值', dataIndex: 'value' },
])

const tableData = computed(() => {
  return props.value.map((value, index) => ({
    key: index.toString(),
    index,
    value,
    type: 'number',
    tooltipTitle: `${props.tooltipTitle} [${index}]`,
  }))
})

const handleValueChange = (index: number, newValue: number) => {
  const newArray = [...props.value]
  newArray[index] = newValue
  emit('update:value', newArray)
}

const currentValue = computed({
  get: () => props.value,
  set: (newValue) => emit('update:value', newValue),
})
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :pagination="false"
    size="small"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'index'">
        {{ record.index }}
      </template>
      <template v-else-if="column.dataIndex === 'value'">
        <CustomInputNumber
          :input="currentValue[record.index]"
          :tooltip-title="record.tooltipTitle"
          @update:input="(val) => handleValueChange(record.index, val)"
        />
      </template>
    </template>
  </a-table>
</template>

<style scoped>
:deep(.ant-table-cell) {
  padding: 8px !important;
}
</style>
