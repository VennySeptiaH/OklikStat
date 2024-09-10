<template>
  <div class="chart-container shadow-md rounded-lg pb-10 hover:bg-slate-100">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'ExpenseProportionChart',
  components: { Doughnut },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData() {
      const months = []
      this.data.forEach((division) => {
        Object.keys(division.monthlyData).forEach((month) => {
          if (!months.includes(month)) months.push(month)
        })
      })

      const mostRecentMonth = months.sort().pop()

      const expensesByDivision = this.data.reduce((acc, division) => {
        const expense = division.monthlyData[mostRecentMonth]?.expense || 0
        if (expense > 0) {
          acc[division.division] = expense
        }
        return acc
      }, {})

      return {
        labels: Object.keys(expensesByDivision),
        datasets: [
          {
            data: Object.values(expensesByDivision),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    },
    chartOptions() {
      const months = []
      this.data.forEach((division) => {
        Object.keys(division.monthlyData).forEach((month) => {
          if (!months.includes(month)) months.push(month)
        })
      })

      const mostRecentMonth = months.sort().pop()

      return {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Pengeluaran Per Divisi Bulan ${mostRecentMonth} Tahun 2024`
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                let label = context.label || ''
                if (label) {
                  label += ': '
                }
                if (context.parsed !== null) {
                  label += context.parsed
                }
                return label
              }
            }
          },
          legend: {
            position: 'top'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 300px; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
