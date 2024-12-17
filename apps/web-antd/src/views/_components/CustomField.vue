<script lang="ts" setup>
interface FieldProps {
  title: string
}
const props = defineProps<FieldProps>()
</script>

<template>
  <span>{{ props.title }}</span>
</template>
