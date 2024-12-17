<script lang="ts" setup>
import { h } from 'vue'

import CustomArray from '../_components/CustomArray.vue'
import CustomField from './CustomField.vue'
import CustomInput from './CustomInput.vue'
import CustomInputNumber from './CustomInputNumber.vue'

interface TableProps {
  table: object
  columns: object
}

const props = defineProps<TableProps>()
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
    class="components-table-demo-nested"
    size="small"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'field'">
        <CustomField :title="record.field" />
      </template>
      <template v-else-if="record.type === 'string'">
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
