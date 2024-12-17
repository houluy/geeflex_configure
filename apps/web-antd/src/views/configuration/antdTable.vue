<script lang="ts" setup>
import { h, reactive } from 'vue'

import { $t } from '@vben/locales'

interface Column {
  title?: string
  dataIndex: string
  key?: string
  width?: number | string
}

const column: Column[] = [
  { title: $t('configuration.meta.field'), dataIndex: 'field', width: '30%' },
  { title: $t('configuration.meta.value'), dataIndex: 'value' },
]

const cellListCol: Column[] = [
  { dataIndex: 'add' },
  { title: 'br_ue', dataIndex: 'br_ue' },
  { title: 'cell_id', dataIndex: 'cell_id' },
  { title: 'cqi_period', dataIndex: 'cqi_period' },
  { title: 'dl_earfcn', dataIndex: 'dl_earfcn' },
  { title: 'Operation', dataIndex: 'operation' },
]

interface RowData {
  key: string
  field: string
  value: any
  hasChildren: boolean
  nested?: object
  nestedColumn?: Column[]
}

const cell_default = reactive<RowData[]>([
  {
    key: 'access',
    field: $t('configuration.test.cell_barred'),
    value: false,
    hasChildren: false,
  },
  {
    key: 'cqi_period',
    field: $t('configuration.test.cqi_period'),
    value: 80,
    hasChildren: false,
  },
])

const data = reactive<RowData[]>([
  {
    key: 'cell_default',
    field: $t('configuration.test.cell_default'),
    value: '',
    hasChildren: true,
    nested: cell_default,
    nestedColumn: column,
  },
  {
    key: 'cell_list',
    field: $t('configuration.test.cell_list'),
    value: '',
    hasChildren: true,
    nested: [
      {
        br_ue: {
          key: 'br_ue',
          field: 'BRUE',
          value: '',
          hasChildren: true,
          nested: [
            {
              key: 'br_coverage_levels',
              field: 'BR覆盖等级',
              value: '',
              hasChildren: true,
              nested: [],
              nestedColumn: column,
            },
            {
              key: 'br_cqi_pucch_n_rb',
              field: 'BR CQI PUCCH RB数量',
              value: 2,
              hasChildren: false,
            },
            {
              key: 'br_mpdcch_paging_n_rep',
              field: 'BR MPDCCH重传次数',
              value: 1,
              hasChildren: false,
            },
          ],
          nestedColumn: column,
        },
        cell_id: 1,
        cqi_period: 80,
        dl_earfcn: 300,
      },
    ],
    nestedColumn: cellListCol,
  },
  {
    key: 'com_addr',
    field: $t('configuration.test.com_addr'),
    value: '0.0.0.0:9001',
    hasChildren: false,
  },
  {
    key: 'enb_id',
    field: $t('configuration.test.enb_id'),
    value: 107_216,
    hasChildren: false,
  },
  {
    key: 'gtp_addr',
    field: 'GTP地址',
    value: '127.0.1.1',
    hasChildren: false,
  },
  {
    key: 'log_filename',
    field: '日志文件名',
    value: '/tmp/enb.log',
    hasChildren: false,
  },
  {
    key: 'mme_list',
    field: '移动性管理网元',
    value: '',
    hasChildren: true,
    nested: [
      {
        mme_list: '127.0.1.100',
      },
    ],
    nestedColumn: [
      {
        dataIndex: 'add',
      },
      {
        title: 'MME地址',
        dataIndex: 'mme_adr',
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
      },
    ],
  },
  {
    key: 'rf_driver',
    field: '射频前端驱动',
    value: '',
    hasChildren: true,
    nested: [
      {
        key: 'args',
        field: '参数',
        value: 'dev0=/dev/sdr0',
        hasChildren: false,
      },
      { key: 'name', field: '名称', value: 'sdr', hasChildren: false },
      {
        key: 'rx_antenna',
        field: '接收天线',
        value: 'auto',
        hasChildren: false,
      },
      { key: 'sync', field: '同步', value: 'internal', hasChildren: false },
    ],
    nestedColumn: column,
  },
  {
    key: 'rx_gain',
    field: '接收增益',
    value: 60,
    hasChildren: false,
  },
  {
    key: 'tx_gain',
    field: '发射增益',
    value: 90,
    hasChildren: false,
  },
])
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

const addItem = (record) => {
  record.push({
    br_ue: '',
    cell_id: 1,
    cqi_period: 80,
    dl_earfcn: 300,
  })
}
const removeItem = (record, index) => {
  record.splice(index, 1)
}
</script>
<template>
  <a-table
    :columns="column"
    :data-source="data"
    :expand-icon="expandIcon"
    :pagination="false"
    class="components-table-demo-nested"
    size="small"
  >
    <template #expandedRowRender="{ record }">
      <a-table
        :columns="record.nestedColumn"
        :data-source="record.nested"
        :pagination="false"
      >
        <template #headerCell="{ column }">
          <template v-if="column.dataIndex === 'add'">
            <a-button shape="circle" @click="addItem(record.nested)">
              <PlusCircleOutlined />
            </a-button>
          </template>
        </template>
        <template #bodyCell="{ column, index }">
          <!--<template v-if="'br_ue' in record.nested[index]">
            <a-table
              :columns="record.nested[index].br_ue.nestedColumn"
              :data-source="record.nested[index].br_ue.nested"
              :pagination="false"
            />
          </template>-->
          <template v-if="column.dataIndex === 'operation'">
            <a-button shape="circle" @click="removeItem(record.nested, index)">
              <MinusCircleOutlined />
            </a-button>
          </template>
          <template v-else-if="column.dataIndex === 'field'">
            <span>{{ record.nested[index].field }}</span>
          </template>
          <template v-else>
            <a-input v-model="record.nested[index].value" />
          </template>
        </template>
      </a-table>
    </template>
  </a-table>
</template>
