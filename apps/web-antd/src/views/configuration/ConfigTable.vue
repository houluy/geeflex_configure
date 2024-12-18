<script lang="ts" setup>
import { reactive } from 'vue'

import config from '#/data/ENB-LTE-NB.json'

const _data = reactive(config)
</script>

<template>
  {{ _data }}
</template>
