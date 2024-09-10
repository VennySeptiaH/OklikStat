<template>
  <div class="p-4">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/" style="color: #0093AD;">Beranda</a></li>
        <li><a href="/KajianStrategis/">Kajian Strategis</a></li>
      </ul>
    </div>

    <div class="Judul text-center">
      <h1 class="text-4xl font-bold">
        Kajian <span class="text-cyan-600">Strategis</span>
      </h1>
      <div class="flex justify-center mt-2 mb-4">
        <div class="h-1 w-16 bg-cyan-500"></div>
        <div class="h-1 w-8 bg-cyan-600"></div>
        <div class="h-1 w-8 bg-cyan-800"></div>
      </div>
      <p class="text-gray-600 text-lg">Seluruh Kajian Forum Mahasiswa Kedinasan Indonesia</p>
    </div>

    <div class="p-4">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4 w-full">
          <div class="flex items-center space-x-2 w-full lg:w-auto">
            <label class="label">
              <span class="label-text">Tampilkan berdasarkan</span>
            </label>
            <select v-model="filterYear" class="select select-bordered border-cyan-600 w-full lg:w-48 h-10">
              <option value="">Semua</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <!-- Add more options as needed -->
            </select>
          </div>
          <div class="flex items-center space-x-2 mt-2 lg:mt-0 w-full lg:w-auto">
            <label class="label">
              <span class="label-text">Urutan</span>
            </label>
            <select v-model="sortOrder" class="select select-bordered border-cyan-600 w-full lg:w-48 h-10">
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>
        <div class="relative w-full lg:w-52 mt-4 lg:mt-0">
          <input v-model="searchQuery" type="text" placeholder="Cari judul kajian strategis" class="input input-bordered border-cyan-600 w-full pr-12" />
          <button class="btn btn-border-cyan-600 border-color: bg-cyan-800 absolute top-0 right-0 h-full rounded-l-none bordered border-cyan-600 hover:bg-cyan-600 bordered border-cyan-600">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
 

    <div class="p-6 py-0">
      <!-- List Artikel -->

      <div v-for="item in paginatedResults" :key="item.id" class="bg-white shadow rounded-lg overflow-hidden flex p-4 items-start hover:shadow-lg transition-shadow duration-300 mb-4">
    <!-- Isi artikel -->
    <div class="flex flex-col items-start mr-5 w-56">
      <img :src="item.image" alt="Press Release Image" class="w-full h-full object-cover rounded mb-2 hidden sm:block">
      <div class="sm:hidden flex flex-col items-start">
        <h2 class="text-xl font-semibold mb-2 ">{{ item.title }}</h2> <!-- Judul Artikel -->
        <p class="text-gray-600 mb-2 hidden sm:block ">{{ item.content }}</p> <!-- Konten Artikel -->
      </div>
      <p class="text-gray-500 text-sm">{{ item.date }}</p>
      <router-link :to="{ name: 'Detail', params: { id: item.id }}" class="text-blue-500 hover:underline">Baca Selengkapnya</router-link>
    </div>
    <div class="flex-1 hidden sm:block">
      <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2> <!-- Judul Artikel -->
      <p class="text-gray-600 mb-2 text-justify">{{ item.content }}</p> <!-- Konten Artikel -->
    </div>
  </div>
    </div>

    <!-- Pagination -->
    <div class="container mx-auto p-4 flex justify-center my-2">
      <div class="join">
        <input v-for="page in totalPages" 
              :key="page" 
              class="join-item btn btn-square" 
              :class="{ 'bg-cyan-800 text-white': currentPage === page }" 
              type="radio" 
              name="options" 
              :aria-label="page" 
              :checked="currentPage === page" 
              @click="currentPage = page" />
      </div>
    </div>
  </div>
</template>

<script>
import fmki1 from '@/assets/FMKI1.jpg'
import fmki2 from '@/assets/FMKI2.jpg'
import fmki3 from '@/assets/FMKI3.jpg'
import fmki4 from '@/assets/FMKI4.jpg'
import fmki5 from '@/assets/FMKI5.jpg'
import fmki6 from '@/assets/FMKI6.jpeg'
import fmki7 from '@/assets/FMKI7.jpg'
import fmki8 from '@/assets/FMKI8.png'
import fmki9 from '@/assets/FMKI9.jpeg'
import fmki10 from '@/assets/FMKI10.jpg'

export default {
  data() {
    return {
      searchQuery: '',
      filterYear: '',
      sortOrder: 'newest',
      currentPage: 1,
      itemsPerPage: 4,
      items: [
        {
          id: 1,
          title: 'Permendikbut-ristek, Upaya Konkret Melawan Predator Seksual Kampus',
          date: '2021-11-30 15:14:00',
          content: 'JAKARTA, 30 November 2021 – Perguruan tinggi adalah bagian dari jenjang pendidikan formal. Pada jenjang ini setiap mahasiswa diberi kesempatan mengeksplorasi bidang keilmuan yang lebih spesifik. Kecerdasan intelektual yang tinggi dan karakter yang baik menjadi hal yang beriringan dalam proses pembelajaran di perguruan tinggi, oleh karena itu, mahasiswa dituntut untuk menjadi pribadi yang matang secara emosional dan intelektual. ',
          image: fmki1,
          link: '#'
        },
        {
          id: 2,
          title: 'Refleksi 76 Tahun Indonesia Merdeka',
          date: '2021-08-18 10:59:00',
          content: 'JAKARTA, 18 Agustus 2021 – Tepat pada hari ini Indonesia telah berumur 76 tahun. Tandanya 76 tahun Indonesia telah merdeka. Kita masih bisa merasakan euforia kemerdekaan di sekitar kita walaupun sedang dalam masa pandemi. Tak lupa kita juga mengingat para pahlawan yang dulu berjuang gigih dan bertaruh nyawa fokus untuk 1 hal saja yaitu kemerdekaan. Sekarang yg bisa kita lakukan sekarang yaitu kita harus bisa mengisi dan memaknai hakikat kemerdekaan Indonesia dengan sepenuhnya.',
          image: fmki4,
          link: '#'
        },
        {
          id: 3,
          title: '#SaveKPK : Jadi, Sekarang Jargon KPK itu Berani Jujur Hebat atau Berani Jujur Pecat?',
          date: '2021-06-24 20:41:00',
          content: 'JAKARTA, 24 Juni 2021 – Alerta! Alerta! KPK, pahlawan kita, yang sangat berani memberantas kejamnya koruptor dan buruknya korupsi sedang mengalami bencana. Berbagai permasalahan bermunculan untuk melemahkan pahlawan kita dari mulai revisi UU KPK, serba-serbi polemik pengalihan status pegawai menjadi ASN dengan tes TWK yang berujung penonaktifan 51 pegawai yang tidak memenuhi syarat kelulusan. ',
          image: fmki8,
          link: '#'
        },
        {
          id: 4,
          title: 'Rapat Koordinasi Pelaksanaan Talkshow SIPENCATAR dan Expo Perguruan Tinggi Tahun 2022',
          date: '2022-03-20 15:03:00',
          content: 'JAKARTA, 20 Maret 2022 – Badan Pengembangan Sumber Daya Manusia Perhubungan KEMENHUB RI menyelenggarakan kegiatan Rapat Koordinasi Pelaksanaan Talkshow SIPENCATAR dan Expo Perguruan Tinggi Tahun 2022 pada hari Jum’at, 11 Maret 2022 pukul 09.30 WIB menggunakan media Zoom Clouds Meeting. ',
          image: fmki6,
          link: '#'
        },
        {
          id: 5,
          title: 'Peninjauan Vaksinasi Covid-19 BEM PKN STAN',
          date: '2021-08-27 14:48:38',
          content: 'JAKARTA, 27 Agustus 2021 – BEM KM PKN STAN berkolaborasi dengan FMKI pada tanggal 24 hingga 26 Agustus 2021 untuk menyelenggarakan kegiatan Vaksinasi Indonesia Bangkit!. Sasaran vaksinasi ini untuk mahasiswa dan masyarakat yang ada di sekitar lingkungan kampus PKN STAN. ',
          image: fmki9,
          link: '#'
        },
      ]
    }
  },
  computed: {
    filteredResults() {
      let results = this.items

      if (this.searchQuery) {
        results = results.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }

      if (this.filterYear) {
        results = results.filter(item => new Date(item.date).getFullYear().toString() === this.filterYear)
      }

      if (this.sortOrder === 'newest') {
        results = results.sort((a, b) => new Date(b.date) - new Date(a.date))
      } else {
        results = results.sort((a, b) => new Date(a.date) - new Date(b.date))
      }

      return results
    },
    paginatedResults() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredResults.slice(startIndex, startIndex + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.filteredResults.length / this.itemsPerPage);
    }
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>