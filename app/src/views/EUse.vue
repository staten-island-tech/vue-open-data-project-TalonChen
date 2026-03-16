<template>
  <div class="container">
    <EUseCard v-for="(item, index) in bill" :key="item.id" :id="index + 1" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EUseCard from './EUseCard.vue'

const bill = ref([])
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/mq6n-s45c.json')
    const data = await response.json()
    bill.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
