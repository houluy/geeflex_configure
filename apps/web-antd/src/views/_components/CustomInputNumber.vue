<script lang="ts" setup>
interface InputNumberProps {
  tooltipTitle?: string
  max?: number
  min?: number
}

const props = withDefaults(defineProps<InputNumberProps>(), {
  tooltipTitle: 'Unknown',
  max: 10,
  min: 0,
})

const iptVal = defineModel('input')
</script>

<template>
  <a-tooltip :title="props.tooltipTitle" placement="topLeft">
    <a-input-number v-model:value="iptVal" :max="props.max" :min="props.min" />
  </a-tooltip>
</template>
