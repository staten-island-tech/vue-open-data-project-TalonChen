<template>
  <h1>{{ bill?.building_address }}</h1>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const bill = ref(null)

async function getData() {
  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/mq6n-s45c.json?$order=building_address&$limit=1&$offset=${route.params.id}`,
    )
    const data = await response.json()
    bill.value = data[0]
  } catch (error) {
    console.log(error)
  }
}
onMounted(getData)
watch(() => route.params.id, getData)
</script>

<style scoped></style>
