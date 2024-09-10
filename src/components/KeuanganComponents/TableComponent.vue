<template>
  <div class="overflow-x-auto pt-10 pb-20 dark:text-white">
    <table class="table w-full caption-top hover:caption-bottom">
      <caption class="caption-bottom hover:caption-bottom">
        Table 1: Rekapitulasi Pengeluaran FMKI Tahun 2024.
      </caption>
      <thead>
        <tr>
          <th class="bg-[#1F2855] text-black">Divisi</th>
          <template v-for="month in uniqueMonths" :key="month">
            <th class="bg-[#1F2855] text-black" colspan="2">{{ month }}</th>
          </template>
        </tr>
        <tr>
          <th class="bg-[#1F2855] text-black"></th>
          <template v-for="month in uniqueMonths" :key="month">
            <th class="bg-[#1F2855] text-black">Pemasukan</th>
            <th class="bg-[#1F2855] text-black">Pengeluaran</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="division in data"
          :key="division.division"
          class="hover:bg-slate-100 dark:hover:bg-gray-800"
        >
          <td class="bg-white text-black dark:bg-[#1F2855] dark:text-white">
            {{ division.division }}
          </td>
          <template v-for="month in uniqueMonths" :key="division.division + month">
            <td class="bg-white text-black dark:bg-[#1F2855] dark:text-white">
              {{ division.monthlyData[month] ? division.monthlyData[month].income : '' }}
            </td>
            <td class="bg-white text-black dark:bg-[#1F2855] dark:text-white">
              {{ division.monthlyData[month] ? division.monthlyData[month].expense : '' }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    uniqueMonths() {
      const months = new Set()
      this.data.forEach((division) => {
        Object.keys(division.monthlyData).forEach((month) => {
          months.add(month)
        })
      })
      return Array.from(months)
    }
  }
}
</script>

<style scoped>
.table {
  @apply w-full border-collapse text-center;
}

.table th,
.table td {
  @apply px-4 py-2 border;
}

.table th {
  @apply text-white bg-[#1F2855];
}

.table td {
  @apply bg-white text-black dark:bg-[#1F2855] dark:text-black;
}

.dark .table th {
  @apply bg-white text-black dark:bg-white;
}

.dark .table td {
  @apply bg-[#1F2855] text-white;
}

.chart-container {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
