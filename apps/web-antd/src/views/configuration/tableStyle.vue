<script lang="ts" setup>
import type { VxeGridProps } from '#/adapter/vxe-table';

import { $t } from '@vben/locales';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

interface RawType {
  field: string;
  value: boolean | number | string;
  title: string;
  parentField: null | string;
}

const data = [
  {
    field: 'cell_default',
    parentField: null,
    title: $t('configuration.test.cell_default'),
    value: null,
  },
  {
    field: 'cell_barred',
    parentField: 'cell_default',
    title: $t('configuration.test.cell_barred'),
    value: true,
  },
  {
    field: 'com_addr',
    parentField: null,
    title: $t('configuration.test.com_addr'),
    value: '0.0.0.0:9001',
  },
];

const gridOptions: VxeGridProps<RawType> = {
  columns: [
    // { type: 'seq', width: 70 },
    { field: 'title', width: 200, title: '配置项', treeNode: true },
    { editRender: { name: 'input' }, field: 'value', title: '值' },
    // { field: 'name', minWidth: 300, title: 'Name', treeNode: true },
    // { field: 'size', title: 'Size' },
    // { field: 'type', title: 'Type' },
    // { field: 'date', title: 'Date' },
  ],
  grid: {
    border: true,
    stripe: true,
  },
  data,
  editConfig: {
    mode: 'cell',
    trigger: 'click',
  },
  pagerConfig: {
    enabled: false,
  },
  treeConfig: {
    parentField: 'parentField',
    rowField: 'field',
    transform: true,
  },
};

const [Grid] = useVbenVxeGrid({ gridOptions });
</script>

<template>
  <Grid />
</template>
