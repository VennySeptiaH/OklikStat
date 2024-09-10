<template>
  <div class="bg">
    <div class="p-8 flex justify-center">
      <div class="text-center w-3/4">
        <h1 class="text-4xl font-bold dark:text-white">
          Media <span class="text-cyan-600">Partner</span>
        </h1>
        <div class="flex justify-center mt-2 mb-4">
          <div class="h-1 w-16 bg-cyan-500"></div>
          <div class="h-1 w-8 bg-cyan-600"></div>
          <div class="h-1 w-8 bg-cyan-800"></div>
        </div>
        <p class="text-gray-600 text-lg dark:text-white">Forum Mahasiswa Kedinasan Indonesia</p>
      </div>
    </div>
    <div class="carousel-container flex justify-center">
      <div class="carousel w-full md:w-3/4 mx-auto flex items-center relative overflow-hidden">
        <button
          @click="prev"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
        >
          ❮
        </button>
        <div
          class="flex w-full transition-transform duration-500"
          :style="{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }"
        >
          <div
            v-for="(item, index) in visibleItems"
            :key="index"
            class="carousel-item md:w-1/4 sm:w-1/2 p-2"
          >
            <div class="relative bg-white shadow-lg aspect-w-4 aspect-h-5">
              <img :src="item.image" class="w-full h-full object-cover" />
              <div
                class="absolute flex flex-col justify-center items-center bottom-0 left-0 bg-opacity-50 custombg text-white p-4 w-full dark"
              >
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <button class="btn btn-primary mt-2 cyan">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <button
          @click="next"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: '../src/assets/background.jpg',
          title: 'RAKERNAS FMKI 2022',
          description: 'Description for item 1'
        },
        {
          image: '../src/assets/background.jpg',
          title: 'Peninjauan Vaksinasi Covid-19 BEM PKN STAN',
          description: 'Description for item 2'
        },
        {
          image: '../src/assets/background.jpg',
          title: 'Semarak Festival Seni Nasional (FSN) 2022',
          description: 'Description for item 3'
        },
        {
          image: '../src/assets/background.jpg',
          title: 'Rapat Koordinasi SIPENCATAR',
          description: 'Description for item 4'
        },
        {
          image: '../src/assets/background.jpg',
          title: 'Acara Tambahan 1',
          description: 'Description for item 5'
        },
        {
          image: '../src/assets/background.jpg',
          title: 'Acara Tambahan 2',
          description: 'Description for item 6'
        }
      ],
      activeIndex: 0,
      itemsPerView: 4 // Ubah sesuai jumlah item yang ingin ditampilkan per slide
    }
  },
  computed: {
    visibleItems() {
      // Mengambil item yang terlihat berdasarkan activeIndex dan itemsPerView
      return this.items.slice(this.activeIndex, this.activeIndex + this.itemsPerView)
    }
  },
  methods: {
    next() {
      // Logika untuk melanjutkan ke slide berikutnya
      if (this.activeIndex < this.items.length - this.itemsPerView) {
        this.activeIndex++
      } else {
        this.activeIndex = 0
      }
    },
    prev() {
      // Logika untuk kembali ke slide sebelumnya
      if (this.activeIndex > 0) {
        this.activeIndex--
      } else {
        this.activeIndex = this.items.length - this.itemsPerView
      }
    }
  }
}
</script>

<style scoped>
.bg {
  background: linear-gradient(to top, #1f2855 5%, transparent 70%);
}
.dark .bg {
  background: linear-gradient(to top, black 5%, #1f2855 70%);
}
.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel {
  overflow: hidden;
  position: relative;
}

.carousel-item {
  flex: 0 0 25%; /* Menyesuaikan jumlah item yang ditampilkan per view */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.aspect-w-4 {
  aspect-ratio: 4 / 5;
}

.custombg {
  background-image: linear-gradient(to top, #0093ad 10%, transparent 100%);
}

.dark .custombg {
  background-image: linear-gradient(to top, #1f2855 10%, transparent 100%);
}

.cyan {
  background-color: #0093ad;
  border-color: white;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .carousel-item {
    flex: 0 0 50%; /* Ubah menjadi 50% untuk menampilkan 2 item per slide pada layar kecil */
  }
}
</style>
