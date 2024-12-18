<script lang="ts" setup>
import type { ColumnType } from '#/typing'

import { reactive } from 'vue'

import { $t } from '#/locales'
import CustomObj from '#/views/_components/CustomObj.vue'

// interface _BasicRowData {
//  key: string
//  field: string
//  value: number | string
//  type: string
//  hasChildren: boolean
// }

interface RowData {
  key: string
  field: string
  value: number | string
  type: string
  hasChildren: boolean
  childrenTable?: RowData[]
  childrenColumn?: ColumnType[]
  tooltipTitle?: string
}

const columns = reactive<ColumnType[]>([
  { title: $t('configuration.meta.field'), dataIndex: 'field', width: '5%' },
  { title: $t('configuration.meta.value'), dataIndex: 'value' },
])
const data = reactive<RowData[]>([
  {
    key: 'aa',
    field: 'a',
    value: '',
    type: 'object',
    hasChildren: true,
    childrenColumn: columns,
    childrenTable: [
      {
        key: 'child-key-a',
        field: 'child-field-a',
        value: 'child-hello',
        type: 'string',
        hasChildren: false,
        tooltipTitle: 'child-field-a-tooltip',
      },
      {
        key: 'child-key-b',
        field: 'child-field-b',
        value: '',
        type: 'object',
        hasChildren: true,
        childrenColumn: columns,
        childrenTable: [
          {
            key: 'child-child-key-a',
            field: 'child-child-field-a',
            value: 'child-child-hello',
            type: 'string',
            hasChildren: false,
            tooltipTitle: 'child-child-field-a-tooltip',
          },
          {
            key: 'child-child-key-b',
            field: 'child-child-field-b',
            value: '',
            type: 'array',
            hasChildren: true,
            childrenColumn: [
              { title: 'children-field-1', dataIndex: ['cfield1', 'value'] },
              { title: 'children-field-2', dataIndex: ['cfield2', 'value'] },
              { title: 'children-field-3', dataIndex: ['cfield3', 'value'] },
              { title: 'children-field-4', dataIndex: ['cfield4', 'value'] },
              { title: 'children-field-5', dataIndex: ['cfield5', 'value'] },
              { title: 'children-field-6', dataIndex: ['cfield6', 'value'] },
            ],
            childrenTable: [
              {
                cfield1: {
                  type: 'number',
                  value: 100,
                  tooltipTitle: 'cfield1-value',
                },
                cfield2: {
                  type: 'string',
                  value: 'hello',
                  tooltipTitle: 'cfield1-value',
                },
                cfield3: {
                  type: 'number',
                  value: 456,
                  tooltipTitle: 'cfield1-value',
                },
                cfield4: {
                  type: 'number',
                  value: 456,
                  tooltipTitle: 'cfield1-value',
                },
                cfield5: {
                  type: 'number',
                  value: 456,
                  tooltipTitle: 'cfield1-value',
                },
                cfield6: {
                  type: 'number',
                  value: 456,
                  tooltipTitle: 'cfield1-value',
                },
              },
              // {
              //  key: 'cfield1',
              //  field: 'cfield1',
              //  value: 10,
              //  type: 'number',
              //  hasChildren: false
              // },
              // {
              //  key: 'cfield2',
              //  field: 'cfield2',
              //  value: 'hello',
              //  type: 'string',
              //  hasChildren: false,
              // },
              // {
              //  key: 'cfield3',
              //  field: 'cfield3',
              //  value: 'child-cvalue3',
              //  type: 'string',
              //  hasChildren: false
              // }
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'bb',
    field: 'b',
    value: 100,
    type: 'number',
    hasChildren: false,
    tooltipTitle: 'bb-tooltip',
  },
])
</script>
<template>
  <CustomObj :columns="columns" :table="data" />
</template>
