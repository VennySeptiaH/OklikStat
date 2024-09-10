<template>
  <div class="p-4">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/" style="color: #0093AD;">Beranda</a></li>
        <li><a href="/PressRelease/">Press Release</a></li>
      </ul>
    </div>

    <div class="Judul text-center">
      <h1 class="text-4xl font-bold">
        Press <span class="text-cyan-600">Release</span>
      </h1>
      <div class="flex justify-center mt-2 mb-4">
        <div class="h-1 w-16 bg-cyan-500"></div>
        <div class="h-1 w-8 bg-cyan-600"></div>
        <div class="h-1 w-8 bg-cyan-800"></div>
      </div>
      <p class="text-gray-600 text-lg">Siaran Pers Forum Mahasiswa Kedinasan Indonesia</p>
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
        <div class="relative w-full lg:w-52 mt-4 lg:mt-0 pr-10">
          <input v-model="searchQuery" type="text" placeholder="Cari judul press release" class="input input-bordered border-cyan-600 w-full" />
          <button class="btn btn-border-cyan-600 border-color: bg-cyan-800 absolute top-0 right-2 h-full rounded-l-none bordered border-cyan-600 hover:bg-cyan-600 bordered border-cyan-600">
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
      <router-link :to="{ name: 'BacaSelengkapnya', params: { id: item.id }}" class="text-blue-500 hover:underline">Baca Selengkapnya</router-link>
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
        <input v-for="page in totalPages" :key="page" class="join-item btn btn-square" :class="{ 'bg-cyan-600': currentPage === page }" type="radio" name="options" :aria-label="page" :checked="currentPage === page" @click="currentPage = page" />
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
          title: 'Audiensi FMKI x MPR RI',
          date: '2023-04-03 16:33:00',
          content: 'JAKARTA, 03 April 2024 – Forum Mahasiswa Kedinasan Indonesia (FMKI) melaksanakan Audiensi dengan Majelis Permusyawaratan Republik Indonesia (MPR RI) dan diterima oleh Wakil Ketua MPR RI Dr. H.M. Hidayat Nur Wahid, Lc, MA, di Ruang Rapat Pimpinan MPR, Gedung Nusantara III, Kompleks Parlemen, Senayan, Jakarta, Rabu (29/3/2023).',
          image: fmki7,
          link: '#'
        },
        {
          id: 2,
          title: 'RAKERNAS FMKI 2022',
          date: '2023-01-09 14:17:00',
          content: 'JAKARTA, 09 Januari 2023 – Rapat Kerja Nasional (RAKERNAS) Forum Mahasiswa Kedinasan Indonesia (FMKI) tahun 2022 telah dilaksanakan secara hybrid pada Jumat–Minggu, 25–27 November 2022 bertempat di Hotel Tasneem, Yogyakarta dan Zoom Meeting. RAKERNAS merupakan program kerja awal yang dilaksanakan oleh Ketua Umum DPP FMKI terpilih.',
          image: fmki4,
          link: '#'
        },
        {
          id: 3,
          title: 'Semarak Festival Seni Nasional (FSN) 2022',
          date: '2022-05-26 16:22:00',
          content: 'JAKARTA, 26 Mei 2022 – Telah dilaksanakan Festival Seni Nusantara (FSN) yang merupakan suatu bentuk kompetisi tingkat nasional yang mempertandingkan beberapa cabang seni antar perguruan tinggi kedinasan, Kegiatan FSN ini merupakan suatu bentuk aksi nyata dari langkah untuk mempererat tali persahabatan antar perguruan tinggi kedinasan, serta meningkatkan daya kreativitas dan semangat sportivitas antar mahasiswa/i, taruna/i, dan Praja Perguruan Tinggi Kedinasan. ',
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
        {
          id: 6,
          title: 'Munaslub : Pelantikan Ketua Umum Terpilih dan Ketua Demus FMKI',
          date: '2021-06-18 07:44:38',
          content: 'JAKARTA, 18 Juni 2021 – Musyawarah Nasional Luar Biasa Forum Mahasiswa Kedinasan Indonesia merupakan MUNASLUB lanjutan dari MUNASLUB 5 Juni 2021 tujuan utama diselenggarakannya MUNASLUB adalah pelantikan Ketua Umum DPP FMKI dan juga Ketua DEMUS FMKI. ',
          image: fmki10,
          link: '#'
        },
        {
          id: 7,
          title: 'Munaslub : Pemilihan Ketua Umum FMKI Baru',
          date: '2021-06-11 07:31:00',
          content: 'JAKARTA, 11 Juni 2021 – Musyawarah Nasional Luar Biasa Forum Mahasiswa Kedinasan Indonesia (Munaslub FMKI) diselenggarakan dengan tujuan mengisi Vacuum of Power didalam kepengurusan DPP FMKI dengan agenda utama pemilihan ketua umum FMKI baru. Kegiatan ini dilaksanakan pada tanggal 5 Juni 2021 dengan dihadiri sebanyak 47 Perguruan Tinggi Kedinasan yang tergabung di dalam Forum Mahasiwa Kedinasan Indonesia. ',
          image: fmki10,
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