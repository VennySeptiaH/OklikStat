<template>
  <div class="chart-container shadow-md rounded-lg hover:bg-slate-100 dark:bg-white">
    <div class="chart-wrapper flex justify-center w-full">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: 'FinanceChart',
  components: { Line },
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

      const incomeData = months.map((month) => {
        return this.data.reduce((sum, division) => {
          return sum + (division.monthlyData[month] ? division.monthlyData[month].income : 0)
        }, 0)
      })

      const expenseData = months.map((month) => {
        return this.data.reduce((sum, division) => {
          return sum + (division.monthlyData[month] ? division.monthlyData[month].expense : 0)
        }, 0)
      })

      return {
        labels: months,
        datasets: [
          {
            label: 'Pemasukan',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: incomeData,
            fill: false
          },
          {
            label: 'Pengeluaran',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: expenseData,
            fill: false
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Pengeluaran FMKI Per Bulan Tahun 2024' },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || ''
                if (label) {
                  label += ': '
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y
                }
                return label
              }
            }
          }
        }
      }
    }
  }
}
</script>
<style scoped>
/* .chart-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 476px;
  width: 100%;
}
.chart-wrapper {
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
} */

.chart-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 476px; /* Fixed height */
  width: 548px;
}
.chart-wrapper {
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
@media (max-width: 1131px) {
  .chart-container {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .chart-wrapper {
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
