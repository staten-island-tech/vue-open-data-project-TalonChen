<template>
  <div class="container">
    <EUseCard v-for="item in bills" :key="index" :bill="item" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EUseCard from '@/views/EUseCard.vue'

const bills = ref([])
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/mq6n-s45c.json')
    const data = await response.json()
    bills.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
