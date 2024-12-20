<script lang="ts" setup>
import type { ColumnType } from '#/typing'

import { ref } from 'vue'

import { parser } from '#/data/index'
import originData from '#/data/originData.json'
import schemaData from '#/data/schemaData.json'
import { $t } from '#/locales'
import CustomObj from '#/views/_components/CustomObj.vue'

const columns = ref<ColumnType[]>([
  { title: $t('configuration.meta.field'), dataIndex: 'key', width: '30%' },
  { title: $t('configuration.meta.value'), dataIndex: 'value' },
])

const tableData = ref(parser(schemaData.properties, originData))

// 监听数据变化
// watch(
//   tableData,
//   (newVal) => {
//     console.group("Root Data Change");
//     console.log("Root data updated:", JSON.stringify(newVal, null, 2));
//     console.groupEnd();
//   },
//   { deep: true }
// );

// 处理表格数据更新
const handleTableUpdate = (newData: any[]) => {
  tableData.value = Array.isArray(newData) ? [...newData] : []
}
</script>

<template>
  <div class="configuration-container">
    <CustomObj
      :columns="columns"
      :table="tableData"
      @update:table="handleTableUpdate"
    />
  </div>
</template>
