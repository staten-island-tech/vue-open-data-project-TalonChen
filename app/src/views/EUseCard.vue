<template>
  <h2>{{ bill?.borough || 'No' }}</h2>
</template>

<script setup>
const props = defineProps({
  bill: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
