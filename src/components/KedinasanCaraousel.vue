<template>
  <div class="flex flex-col justify-center items-center pt-7">
    <div class="carousel w-full md:w-4/5 p-4 rounded-lg relative overflow-hidden">
      <div
        class="carousel-inner flex justify-center transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * (100 / items.length)}%)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item flex-shrink-0 w-full sm:w-1/2 md:w-1/5 p-4"
        >
          <div class="relative flex flex-col items-center h-full">
            <div
              class="card text-black p-4 m-2 shadow-lg hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center mt-12 relative"
            >
              <img
                :src="item.image"
                alt="logo"
                class="absolute -top-12 h-24 w-24 bg-white rounded-lg border-4 border-white shadow-lg"
              />
              <h2 class="text-lg font-bold mt-16 mb-2 text-center">{{ item.title }}</h2>
              <p class="text-center">{{ item.description }}</p>
              <a :href="item.url" target="_blank" class="mt-6 inline-block w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-full text-center hover:bg-blue-700 transition duration-300 ease-in-out">
                Telusuri Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button @click="prevSlide" class="btn btn-circle bg-white">❮</button>
        <button @click="nextSlide" class="btn btn-circle bg-white">❯</button>
      </div>
    </div>
  </div>
</template>


<script>
import news from '@/assets/news.png'
import publikasi from '@/assets/publikasi.png'
import inflasi from '@/assets/inflasi.png'
import pariwisata from '@/assets/pariwisata.png'
import konsumsi from '@/assets/konsumsi.png'
import pendidikan from '@/assets/pendidikan.png'
import tenagakerja from '@/assets/tenagakerja.png'
import transportasi from '@/assets/transportasi.png'
import stis from '@/assets/stis.png'
import stan from '@/assets/stan.png'
import poltekim from '@/assets/poltekim.png'

export default {
  data() {
    return {
      currentSlide: 0,
      items: [
        {
          image: publikasi,
          title: 'Publikasi',
          description: 'Berisi segala publikasi berdasarkan hasil kegiatan sensus, survei, dan/atau kegiatan statistik lainnya yang diselenggarakan oleh BPS.',
          url: 'https://blitarkab.bps.go.id/id/publication'
        },
        {
          image: news,
          title: 'Berita Resmi Statistik',
          description: 'Media yang diterbitkan secara berkala, memuat ringkasan fenomena sosial/ekonomi berdasarkan hasil kegiatan statistik BPS',
          url: 'https://blitarkab.bps.go.id/id/pressrelease'
        },
        {
          image: inflasi,
          title: 'Inflasi',
          description: 'Suatu proses meningkatnya harga-harga secara umum dan terus-menerus. BPS menyediakan Data Inflasi yang diupdate Secara berkala.',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=536'
        },
        {
          image: pariwisata,
          title: 'Pariwisata',
          description: 'Statistik mengenai aktivitas pengunjung (seperti kedatangan/keberangkatan, menginap semalam, pengeluaran, tujuan kunjungan, dll.)',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=561'
        },
        {
          image: pendidikan,
          title: 'Pendidikan',
          description: 'Mencakup Partisipasi pendidikan, buta huruf, lembaga dan sistem pendidikan, SDM dan keuangan yang diinvestasikan dalam pendidikan dll.',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=521'
        },
        {
          image: tenagakerja,
          title: 'Tenaga Kerja',
          description: 'Mencakup statistik tentang angkatan kerja, pasar tenaga kerja, lapangan kerja dan pengangguran, kondisi tenaga kerja dll.',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=520'
        },
        {
          image: transportasi,
          title: 'Transportasi',
          description: 'Mencakup statistik semua moda transportasi (udara, kereta api, jalan raya, perairan darat, laut), termasuk topik seperti infrastruktur transportasi',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=560'
        },
        {
          image: konsumsi,
          title: 'Konsumsi dan Pendapatan',
          description: 'Mencakup statistik pendapatan dan pengeluaran rumah tangga dari sudut pandang rumah tangga (semua jenis pendapatan dan pengeluaran)',
          url: 'https://blitarkab.bps.go.id/id/statistics-table?subject=523'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.items.length - 1
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
}
.carousel-inner {
  display: flex;
  justify-content: flex-start;
  transition: transform 0.5s ease;
}
.carousel-item {
  width: 100%;
  max-width: 300px; /* Atur lebar maksimal */
  margin: 0 auto; /* Buat item tetap di tengah */
}
.card {
  height: 300px;
  width: 100%;
  min-height: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
img {
  object-fit: cover;
}

@media (min-width: 640px) and (max-width: 1024px) {
  .carousel-item {
    width: 50%; /* Dua item per baris di layar tablet */
    max-width: 400px; /* Batasi lebar maksimum */
  }
}

@media (min-width: 1025px) {
  .carousel-item {
    width: 20%; /* Lima item per baris di layar besar */
    max-width: none; /* Tidak ada batasan lebar di layar besar */
  }
}

</style>

