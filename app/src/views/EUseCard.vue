<template>
  <h2 v-if="bill">{{ bill._1 }}</h2>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  bill: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
const billPath = computed(() => {})
</script>

<style lang="scss" scoped></style>
