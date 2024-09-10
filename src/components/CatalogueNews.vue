<template>
  <div class="catalogue pb-25 dark:bg-[#1F2855]">
    <div class="container mx-auto p-4 w-3/4 bg-base-100 rounded-3xl dark:bg-[#1F2855]">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8">
        <!-- Press Release Section -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold dark:text-white">Press Release</h2>
            <a href="#" class="text-cyan-600 flex items-center font-bold">
              LIHAT SEMUA
              <i class="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in pressReleases"
              :key="item.id"
              class="card bg-base-100 shadow-xl consistent-card"
            >
              <figure><img :src="item.image" alt="Image" /></figure>
              <div class="card-body dark:bg-[#1F2855]">
                <h2 class="card-title dark:text-white">{{ item.title }}</h2>
                <p class="dark:text-white">
                  <i class="fas fa-calendar-alt mr-2 dark:text-white"></i>{{ item.date }}
                </p>
                <a :href="item.link" class="text-cyan-600 flex items-center dark:text-white">
                  Baca Selengkapnya
                  <i class="fas fa-external-link-alt ml-2 text-cyan-600"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Vertical Divider -->
        <div class="hidden md:block w-px vertical-divider"></div>
        <!-- Kajian Strategis Section -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold dark:text-white">Kajian Strategis</h2>
            <a href="#" class="text-cyan-600 flex items-center font-bold">
              LIHAT SEMUA
              <i class="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in strategicStudies"
              :key="item.id"
              class="card bg-base-100 shadow-xl consistent-card"
            >
              <figure><img :src="item.image" alt="Image" /></figure>
              <div class="card-body dark:bg-[#1F2855]">
                <h2 class="card-title dark:text-white">{{ item.title }}</h2>
                <p class="dark:text-white">
                  <i class="fas fa-calendar-alt mr-2 dark:text-white"></i>{{ item.date }}
                </p>
                <a :href="item.link" class="text-cyan-600 flex items-center dark:text-white">
                  Baca Selengkapnya
                  <i class="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressReleases: [
        {
          id: 1,
          image: '../src/assets/background.jpg',
          title: 'Audiesi FMKI X MPR RI',
          date: 'Selasa, 28 Mei 2024',
          link: ''
        },
        {
          id: 2,
          image: '../src/assets/background.jpg',
          title: 'Pendaftaran CPNS 2021 Resmi Dibuka',
          date: 'Selasa, 28 Mei 2024',
          link: '#'
        },
        {
          id: 3,
          image: '../src/assets/background.jpg',
          title: 'Peninjauan Vaksinasi Covid-19 BEM PKN STAN',
          date: 'Selasa, 28 Mei 2024',
          link: '#'
        },
        {
          id: 4,
          image: '../src/assets/background.jpg',
          title: 'RAKERNAS FMKI 2022',
          date: 'Selasa, 28 Mei 2024',
          link: '#'
        }
      ],
      strategicStudies: [
        {
          id: 5,
          image: '../src/assets/background.jpg',
          title: 'RAKERNAS FMKI 2022',
          date: 'Selasa, 28 Mei 2024',
          link: '#'
        },
        {
          id: 6,
          image: '../src/assets/background.jpg',
          title: 'FMKI',
          date: 'Jumat, 2 Februari 2024',
          link: '#'
        },
        {
          id: 7,
          image: '../src/assets/background.jpg',
          title: 'Focus Group Discussion',
          date: 'Jumat, 2 Februari 2024',
          link: '#'
        },
        {
          id: 8,
          image: '../src/assets/background.jpg',
          title: 'Pendaftaran CPNS 2021 Resmi Dibuka',
          date: 'Rabu, 31 Januari 2024',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>
@import 'tailwindcss/tailwind.css';
.catalogue {
  background: linear-gradient(to bottom, #1f2855 40%, transparent 10%);
}

.dark .catalogue {
  background: linear-gradient(to bottom, black 40%, transparent 10%);
}

.vertical-divider {
  width: 2px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Warna putih dengan transparansi */
  margin: auto 0; /* Pastikan margin hanya secara vertikal untuk mengisi tinggi penuh */
}
.consistent-card {
  width: 100%; /* Pastikan kartu memenuhi lebar kolom */
  display: flex;
  flex-direction: column;
}

.consistent-card img {
  width: 100%;
  height: 150px; /* Tentukan tinggi gambar yang konsisten */
  object-fit: cover; /* Pastikan gambar memenuhi area tanpa distorsi */
}

.consistent-card .card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 230px;
}

.consistent-card .card-title {
  font-size: 1.25rem; /* Sesuaikan ukuran font untuk judul */
  font-weight: bold;
  margin-bottom: 0.5rem; /* Margin bawah untuk spasi */
}

.consistent-card p {
  flex-grow: 1;
  margin-bottom: 0.5rem; /* Margin bawah untuk spasi */
}

.consistent-card a {
  align-self: flex-start;
  text-decoration: none;
  font-weight: bold;
}
</style>
