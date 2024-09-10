<template>
  <div class="chart-container shadow-md rounded-lg hover:bg-slate-100 dark:bg-white">
    <div class="flex flex-col items-start mb-4">
      <label for="monthSelect" class="block text-sm font-medium text-gray-700">Pilih Bulan:</label>
      <select
        id="monthSelect"
        v-model="selectedMonth"
        @change="updateChartData"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option v-for="month in months" :key="month">{{ month }}</option>
      </select>
    </div>
    <div class="chart-wrapper flex justify-center w-full">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement)

export default {
  name: 'FinanceChart',
  components: { Bar },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const selectedMonth = ref('')
    const chartData = ref({ labels: [], datasets: [] })
    const months = ref([])

    const updateChartData = () => {
      const selectedMonthData = {}

      props.data.forEach((division) => {
        const divisionName = division.division
        const monthlyData = division.monthlyData[selectedMonth.value]

        if (monthlyData) {
          const income = monthlyData.income || 0
          const expense = monthlyData.expense || 0

          selectedMonthData[divisionName] = {
            income: income,
            expense: expense
          }
        }
      })

      // Format data untuk chart
      chartData.value = {
        labels: Object.keys(selectedMonthData),
        datasets: [
          {
            label: 'Pemasukan',
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: Object.values(selectedMonthData).map((data) => data.income)
          },
          {
            label: 'Pengeluaran',
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: Object.values(selectedMonthData).map((data) => data.expense)
          }
        ]
      }
    }

    onMounted(() => {
      if (props.data.length > 0) {
        const firstDivision = props.data[0]
        months.value = Object.keys(firstDivision.monthlyData)
        selectedMonth.value = months.value[0] // Pilih bulan pertama sebagai default
        updateChartData()
      }
    })

    watch(selectedMonth, updateChartData)

    const chartOptions = reactive({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: 'Pengeluaran dan Pemasukan per Divisi Tahun 2024' },
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
    })

    return {
      selectedMonth,
      chartData,
      months,
      chartOptions,
      updateChartData
    }
  }
}
</script>

<style scoped>
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
    height: 476px;
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
