<template>
  <h1>{{ bill?.building_address }}</h1>
  <h2>{{ bill?.measurement }}</h2>
  <p>{{ bill?._1 }}</p>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Chart from 'chart.js/auto'
const route = useRoute()
const bill = ref(null)
const chartRef = ref(null)
let chartInstance = null
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

async function renderChart() {
  if (!bill.value || !chartRef.value) return
  await nextTick()
  const ctx = chartRef.value.getContext('2d')

  const monthlyData = [
    bill.value.jan_09,
    bill.value.feb_09,
    bill.value.mar_09,
    bill.value.apr_09,
    bill.value.may_09,
    bill.value.jun_09,
    bill.value.aug_08,
    bill.value.sep_08,
    bill.value.oct_08,
    bill.value.nov_08,
    bill.value.dec_08,
  ].map(Number)

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chartRef.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Energy Usage (Bar)',
          data: monthlyData,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
        },
        {
          type: 'line',
          label: 'Energy Trend (Line)',
          data: monthlyData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3,
          fill: false,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}
onMounted(getData)
watch(bill, renderChart)
watch(() => route.params.id, getData)
</script>

<style scoped></style>
