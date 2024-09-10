<template>
  <!-- Outer Container with max-width, blur, and translucent effect -->
  <div class="container mx-auto bg-white/85 backdrop-blur-lg rounded-lg shadow-lg p-4 max-w-[85%]">
    <!-- Section Title -->
    <div class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold">
        Info Apa Yang Anda Cari
      </h1>
    </div>

    <!-- Cards Container -->
    <div class="flex flex-wrap justify-center items-center gap-8 px-4">
      <!-- First Card -->
      <div class="card bg-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="@/assets/bps.png" alt="Consultation Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Website BPS</h2>
          <p>Berisikan segala sesuatu informasi statistik yang berkualitas dan akurat dalam rangka mendukung Indonesia Maju.</p>
          <a href="https://blitarkab.bps.go.id/id" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>

      <!-- Second Card -->
      <div class="card bg-green-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="@/assets/desacantik.png" alt="Consultation Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Desa Cantik</h2>
          <p>Program yang mendorong ​kolaborasi data ​statistik yang berkualitas dan pembangunan ​desa menjadi lebih tepat sasaran</p>
          <a href="https://pdd-entri.my.id/" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>

      <!-- Third Card -->
      <div class="card bg-orange-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="@/assets/pojokstatistik.png" alt="Publications Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Pojok Statistik</h2>
          <p>Sebuah layanan ​kolaborasi antara BPS ​dengan perguruan tinggi ​sebagai media layanan dan promosi statistik di ​lingkungan universitas</p>
          <a href="https://pojokstatistik.bps.go.id/" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-orange-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>

      <!-- Fourth Card -->
      <div class="card bg-purple-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="@/assets/romantik.png" alt="Support Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Romantik BPS</h2>
          <p>Romantik merupakan Layanan bagi instansi pemerintah untuk mendapatkan rekomendasi penyelenggaraan kegiatan statistik sektoral dari BPS.</p>
          <a href="https://romantik.web.bps.go.id/" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>

      <!-- First Card -->
      <div class="card bg-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="@/assets/haloPST.png" alt="Consultation Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Halo PST</h2>
          <p>Inovasi BPS yang merupakan sarana untuk Konsultasi Online & Pemanfaatan Artificial Intelligent Untuk Pelayanan Statistik.</p>
          <a href="https://halopst.web.bps.go.id/?mfd=3500" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>

      <!-- Fourth Card -->
      <div class="card bg-purple-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div class="text-center">
          <img src="https://via.placeholder.com/100" alt="Support Icon" class="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h2 class="text-2xl font-bold mb-2">Statistik Sektoral</h2>
          <p>Statistik Sektoral adalah statistik yang pemanfaatannya ​ditujukan untuk memenuhi kebutuhan yang merupakan tugas pokok instansi ​yang bersangkutan.</p>
          <a href="#" target="_blank" class="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
            Telusuri Website
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCards'
}
</script>

<style scoped>
.container {
  max-width: 95%; /* Adjusted the width to be 85% of the viewport */
  margin-left: auto;
  margin-right: auto;
}

.bg-white\/60 {
  background-color: rgba(255, 255, 255, 0.6); /* Translucent white background */
}

.backdrop-blur-lg {
  backdrop-filter: blur(10px); /* Blur effect */
}

.rounded-lg {
  border-radius: 1rem;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  width: calc(25% - 2rem); /* 4 cards per row with spacing */
  min-width: 240px;
  height: 400px; /* Fixed height for consistent size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05); /* Slightly scale up the card */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-8 {
  gap: 2rem; /* Add spacing between cards */
}

@media (max-width: 1024px) {
  .card {
    flex: 1 1 45%; /* Two cards per row on medium screens */
  }
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 100%; /* Full width on smaller screens */
    margin: 1rem 0; /* Show 1 card per row on very small screens */
  }
}
</style>
