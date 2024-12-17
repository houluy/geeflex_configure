<script lang="ts" setup>
interface InputNumberProps {
  tooltipTitle?: string
  max?: number
  min?: number
}

const props = defineProps<InputNumberProps>()
const iptVal = defineModel('input')
</script>

<template>
  <a-tooltip :title="props.tooltipTitle" placement="topLeft">
    <a-input-number v-model:value="iptVal" :max="props.max" :min="props.min" />
  </a-tooltip>
</template>
