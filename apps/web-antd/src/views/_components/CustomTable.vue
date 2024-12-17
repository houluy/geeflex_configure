<script lang="ts" setup>
import type { ColumnType } from '#/typing'

interface TableProps {
  columns: ColumnType[]
  data: {}
}

const props = defineProps<TableProps>()
</script>

<template>
  <a-table :column="props.columns" :data-source="props.data" />
</template>
