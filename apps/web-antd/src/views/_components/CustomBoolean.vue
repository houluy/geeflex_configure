<script lang="ts" setup>
interface BooleanProps {
  tooltipTitle?: string
}

const props = withDefaults(defineProps<BooleanProps>(), {
  tooltipTitle: 'Unknown',
})

const boolVal = defineModel('input')
</script>

<template>
  <a-tooltip :title="props.tooltipTitle" placement="topLeft">
    <a-switch v-model:checked="boolVal" />
  </a-tooltip>
</template>
