<script lang="ts" setup>
import { reactive } from 'vue';

// import schema from '#/data/ENB-LTE-NB-Schema.json';
import schema from '#/data/simple.json';

const formProps = {
  layoutColumn: 3, // 1 2 3 ，支持 1 2 3 列布局，如果使用inline表单这里配置无效
  inline: false, // 行内表单模式，建议：开启时labelPosition不要配置top, antd不要配置labelCol wrapperCol
  inlineFooter: true, // 如果想要保存按钮和表单元素一行显示，需要配置 true
  labelSuffix: '：', // label后缀
  labelPosition: 'left', // 表单域标签的位置
  isMiniDes: false, // 是否优先mini形式显示描述信息（label文字和描述信息同行显示）
  labelWidth: 'auto',
  defaultSelectFirstOption: true, // 单选框必填，是否默认选中第一个
  popover: {}, // 透传给ui 组件库的popver组件，比如element ui Popover，antd a-popover
};
const form = reactive({});
</script>

<template>
  <VueForm v-model="form" :form-props="formProps" :schema="schema" />
</template>
