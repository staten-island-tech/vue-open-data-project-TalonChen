<template>
  <router-link :to="billPath">
    <h1>{{ bill?.building_address }}</h1>
    <h2>{{ bill?.measurement }}</h2>
    <p>{{ bill?._1 }}</p>
  </router-link>
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
const billPath = computed(() => {
  return `/bill/${props.id}`
})
</script>

<style lang="scss" scoped></style>

<!-- remember to sign out twin -->
