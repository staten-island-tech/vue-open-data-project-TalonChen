<template>
  <h2>{{ bill?.building_address || 'No' }}</h2>
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
