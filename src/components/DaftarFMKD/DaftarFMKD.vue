<template>
  <div class="min-h-screen flex flex-col items-center w-full">
    <!-- Breadcrumb -->
    <div class="w-full max-w-7xl text-sm breadcrumbs bg-white-100 pt-0 pl-20 self-start">
      <!-- <div class="w-full max-w-7xl text-sm breadcrumbs bg-white-100 p-4 ml-4 md:ml-20 self-start"> -->
      <ul>
        <li class="text-[#0093AD]"><a>Beranda</a></li>
        <li class="text-[#0093AD]"><a>Kajian Strategis</a></li>
        <li class="text-gray-600 dark:text-white"><a>Daftar FMKD</a></li>
      </ul>
    </div>

    <!-- Header -->
    <div class="text-center mt-0 mb-6">
      <h1 class="text-4xl md:text-5xl font-bold text-[#333333] dark:text-white">
        DAFTAR <span class="text-cyan-600">FMKD</span>
      </h1>

      <div class="flex justify-center mt-2 mb-4">
        <div class="h-1 w-16 bg-cyan-600"></div>
        <div class="h-1 w-4 bg-cyan-400"></div>
        <div class="h-1 w-4 bg-cyan-600"></div>
      </div>
      <p
        class="text-[#7F8C8D] max-w-full md:max-w-[38vw] text-[16px] md:text-[18px] dark:text-white"
      >
        Daftar Forum Mahasiswa Kedinasan Daerah di Indonesia
      </p>
    </div>

    <!-- konten -->
    <div class="w-[70%] px-4 md:px-8">
      <div class="flex justify-end mb-4">
        <label
          class="input input-bordered custom-border flex justify-end gap-2 w-full md:w-1/3 h-10 bg-white"
        >
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Cari nama PTK"
            class="grow text-base md:text-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-6 h-6 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div>
      <table class="table w-full text-[#404040] text-sm md:text-base dark:text-white">
        <thead>
          <tr class="text-[#404040] dark:text-white">
            <th>No.</th>
            <th>Perguruan Tinggi Kedinasan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ptk, index) in paginatedPTKs" :key="ptk.id">
            <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
            <td>{{ ptk.name }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center mt-10 mb-8">
        <button
          class="btn btn-outline text-base md:text-lg dark:bg-white"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          «
        </button>
        <button
          class="btn btn-outline text-base md:text-lg dark:bg-black"
          v-for="page in totalPages"
          :key="page"
          :class="{ 'btn-active': currentPage === page, 'dark-mode-btn': isDarkMode }"
          @click="setPage(page)"
        >
          {{ page }}
        </button>
        <button
          class="btn btn-outline text-base md:text-lg dark:bg-white text-black"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          »
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 15,
      isDarkMode: {
        type: Boolean,
        default: false
      },
      ptkList: [
        { id: 1, name: 'FMKD Blitar' },
        { id: 2, name: 'FMKD Blora' },
        { id: 3, name: 'FMKD Bojonegoro' },
        { id: 4, name: 'FMKD Kota Surabaya' },
        { id: 5, name: 'FMKD Pamekasan' },
        { id: 6, name: 'FMKD Purwerejo' },
        { id: 7, name: 'FMKD Semarang' },
        { id: 8, name: 'FMKD Tegal' },
        { id: 9, name: 'FMKD Trenggalek' },
        { id: 10, name: 'HIMAKADA Bandung Raya' },
        { id: 11, name: 'HIMAKADA Bumi Raflesia' },
        { id: 12, name: 'HIMAKADA Ciayumajakuning' },
        { id: 13, name: 'HIMAKADA Garut' },
        { id: 14, name: 'HIMAKADA Jambi' },
        { id: 15, name: 'HIMAKADA Jember' },
        { id: 16, name: 'HIMAKADA Kebumen' },
        { id: 17, name: 'HIMAKADA Kediri' },
        { id: 18, name: 'HIMAKADA Madiun' },
        { id: 19, name: 'HIMAKADA Pasuruan Raya' },
        { id: 20, name: 'HIMAKADA Sumbawa' },
        { id: 21, name: 'HIMAKADA Wonogiri' },
        { id: 22, name: 'FMKD Tulungagung' }
      ]
    }
  },

  computed: {
    filteredPTKs() {
      if (this.searchQuery.trim() === '') {
        return this.ptkList
      }
      const query = this.searchQuery.toLowerCase()
      return this.ptkList.filter((ptk) => ptk.name.toLowerCase().includes(query))
    },
    totalPages() {
      return Math.ceil(this.filteredPTKs.length / this.itemsPerPage)
    },
    paginatedPTKs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredPTKs.slice(start, end)
    }
  },
  methods: {
    setPage(page) {
      this.currentPage = page
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 100%;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 65vw;
  }
  .input::placeholder {
    opacity: 0;
  }
}

.btn:hover {
  background-color: rgb(0, 147, 173);
  color: white;
}

.custom-border {
  border: 1.5px solid rgba(0, 147, 173, 0.6); /* Border color and thickness */
  padding: 8px; /* Optional: padding for better appearance */
  border-radius: 9px; /* Optional: border radius for rounded corners */
}

.custom-border:focus {
  outline: none; /* Remove default outline */
  box-shadow: 0 0 5px rgba(0, 147, 173, 0.5); /* Optional: add shadow on focus */
}

h1 {
  font-size: 3vw; /* Responsive font size */
}
h3 {
  font-size: 2vw; /* Responsive font size */
}
p {
  font-size: 1.4vw; /* Responsive font size */
}
.dark-mode-btn {
  background-color: black;
  color: white;
}

/* Dark mode active state */
.btn-active.dark-mode-btn {
  background-color: white; /* Dark mode active background color */
  color: black; /* Dark mode active text color */
}

@media (max-width: 768px) {
  h1 {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }
  h3 {
    font-size: 3vw; /* Adjust font size for smaller screens */
  }
  p {
    font-size: 2.5vw; /* Adjust font size for smaller screens */
  }
  .container {
    max-width: 85vw; /* Adjust container width for smaller screens */
  }
  .card {
    width: 80vw; /* Adjust card width for smaller screens */
  }
  .center-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
