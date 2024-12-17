<script lang="ts" setup>
import type { ColumnType } from '#/typing'

import { h } from 'vue'

import CustomInput from './CustomInput.vue'
import CustomInputNumber from './CustomInputNumber.vue'
import CustomObj from './CustomObj.vue'

interface ArrayProps {
  columns: ColumnType[]
  table: object
}

const props = defineProps<ArrayProps>()
const expandIcon = (propsval) => {
  if (propsval.record.hasChildren) {
    const mark = propsval.expanded ? '-' : '+'
    return h(
      'a',
      {
        onClick: (e) => {
          propsval.onExpand(propsval.record, e)
        },
      },
      mark,
    )
  } else {
    return null
  }
}
</script>

<template>
  <a-table
    :columns="props.columns"
    :data-source="props.table"
    :expand-icon="expandIcon"
    :pagination="false"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="record[column.dataIndex[0]].type === 'string'">
        <CustomInput
          v-model:input="record[column.dataIndex[0]].value"
          :tooltip-title="record[column.dataIndex[0]].tooltipTitle"
        />
      </template>
      <template v-else-if="record[column.dataIndex[0]].type === 'number'">
        <CustomInputNumber
          v-model:input="record[column.dataIndex[0]].value"
          :tooltip-title="record[column.dataIndex[0]].tooltipTitle"
        />
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <template v-if="record.type === 'object'">
        <CustomObj
          :columns="record.childrenColumn"
          :table="record.childrenTable"
        />
      </template>
      <template v-else-if="record.type === 'array'">
        <CustomArray
          :columns="record.childrenColumn"
          :table="record.childrenTable"
        />
      </template>
    </template>
  </a-table>
</template>
