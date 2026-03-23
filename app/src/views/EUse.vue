<template>
  <div class="container">
    <EUseCard v-for="(item, index) in bills" :key="index" :bill="item" :id="offset + index" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EUseCard from '../../components/EUseCard.vue'

const bills = ref([])
const offset = ref(0)
async function getData() {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/mq6n-s45c.json?$order=building_address&$limit=1&$offset=${offset}',
    )
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

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
