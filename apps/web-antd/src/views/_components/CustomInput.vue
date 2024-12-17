<script lang="ts" setup>
interface InputProps {
  tooltipTitle?: string
}

const props = defineProps<InputProps>()

const iptData = defineModel('input')
</script>

<template>
  <a-tooltip
    :title="props.tooltipTitle"
    :trigger="['focus']"
    placement="topLeft"
  >
    <a-input v-model:value="iptData" />
  </a-tooltip>
</template>
