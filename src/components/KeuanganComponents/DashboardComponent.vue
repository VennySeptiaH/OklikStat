<template class="scroll-smooth">
  <div class="p-5 dark:bg-[#1F2855]">
    <div class="flex flex-col lg:flex-row justify-center gap-4">
      <div class="">
        <finance-chart :data="unifiedData" />
      </div>
      <div class="">
        <cluster-bar :data="unifiedData" />
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <finance-table :data="unifiedData" class="w-full lg:w-3/4" />
    </div>
  </div>
</template>

<script>
import FinanceChart from '@/components/KeuanganComponents/Chart1Component.vue'
import FinanceTable from '@/components/KeuanganComponents/TableComponent.vue'
import ClusterBar from '@/components/KeuanganComponents/ClusterBar.vue'

export default {
  components: {
    FinanceChart,
    ClusterBar,
    FinanceTable
  },
  data() {
    return {
      unifiedData: [
        {
          division: 'IT',
          monthlyData: {
            Januari: { income: 0, expense: 0 },
            Februari: { income: 17000, expense: 11000 },
            Maret: { income: 0, expense: 11000 }
          }
        },
        {
          division: 'HR',
          monthlyData: {
            Januari: { income: 0, expense: 0 },
            Februari: { income: 10000, expense: 11000 },
            Maret: { income: 0, expense: 50000 }
          }
        },
        {
          division: 'Sales',
          monthlyData: {
            Januari: { income: 15000, expense: 9000 },
            Februari: { income: 10000, expense: 11000 },
            Maret: { income: 0, expense: 0 }
          }
        },
        {
          division: 'Marketing',
          monthlyData: {
            Januari: { income: 10000, expense: 8000 },
            Februari: { income: 0, expense: 11000 },
            Maret: { income: 5000, expense: 5000 }
          }
        }
      ]
    }
  }
}
</script>
