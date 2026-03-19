<template>
  <h1>{{ bill?.building_address }}</h1>
  <h2>{{ bill?.measurement }}</h2>
  <p>{{ bill?._1 }}</p>
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
