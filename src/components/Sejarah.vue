<template>
  <div>
    <div class="p-4">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="#" style="color: #0093AD;">Tentang FMKI</a></li>
        <li><a href="/Sejarah/">Sejarah dan Dasar Hukum</a></li>
        </ul>
      </div>
    </div>
    
    <div class="Judul">
      <div class="text-center">
        <h1 class="text-4xl font-bold">
          Tentang <span class="text-cyan-600">FMKI</span>
        </h1>
        <div class="flex justify-center mt-2 mb-4">
          <div class="h-1 w-16 bg-cyan-500"></div>
          <div class="h-1 w-8 bg-cyan-600"></div>
          <div class="h-1 w-8 bg-cyan-800"></div>
        </div>
        <p class="text-gray-600 text-lg">Sejarah dan Dasar Hukum</p>
      </div>
    </div>

      <div class="flex p-4">
    <!-- Sidebar with Buttons -->
    <div class="w-1/5 mr-4">
      <div class="rounded-lg shadow-lg">
        <div class="flex flex-col">
          <button
            :class="{'bg-cyan-600 text-white': activeSection === 'sejarah', 'bg-white text-black': activeSection !== 'sejarah'}"
            class="flex items-center justify-center h-12 w-full rounded-t-lg rounded-b-none button-text"
            @click="activeSection = 'sejarah'"
          >
            Sejarah FMKI
          </button>
          <button
            :class="{'bg-cyan-600 text-white': activeSection === 'hukum', 'bg-white text-black': activeSection !== 'hukum'}"
            class="flex items-center justify-center h-12 w-full rounded-t-none rounded-b-lg button-text"
            @click="activeSection = 'hukum'"
          >
            Dasar Hukum
          </button>
        </div>
      </div>
    </div>

      <!-- Main Content -->
      <div class="w-full p-6 bg-white-100 rounded-lg shadow-md">
        <div v-if="activeSection === 'sejarah'">
          <h1 class="text-2xl font-bold mb-2">Sejarah FMKI</h1>
          <div class="py-0">
            <div
              class="bg-cyan-500 bg-opacity-50 shadow rounded-lg overflow-hidden flex p-4 items-start hover:shadow-lg transition-shadow duration-300">
              <div class="flex flex-col items-start mr-6 w-32">
                <img src="@/assets/justice2.png" alt="Justice" class="object-cover rounded" />
              </div>
              <div class="flex-1">
                <h2 class="text-white text-xl font-semibold mb-2">2002</h2>
                <p class="text-white mb-2">
                  Muncul isu mengenai swastanisasi dan peleburan perguruan tinggi kedinasan (PTK) di bawah Departemen Pendidikan Nasional. Hal itu merupakan imbas dari diberlakukannya UU No. 20 Tahun 2003. Diadakan Kongres Nasional Mahasiswa Kedinasan Indonesia di kampus STAN sebagai salah satu upaya untuk mempertahankan eksistensi PTK dalam sisdiknas Indonesia. Dari 48 PTK yang diundang, sejumlah 32 PTK dapat menghadiri kongres tersebut.
                </p>
              </div>
            </div>
          </div>

          <div class="py-2">
            <div class="bg-cyan-500 bg-opacity-50 shadow rounded-lg overflow-hidden flex p-4 items-start hover:shadow-lg transition-shadow duration-300">
              <div class="flex flex-col items-end flex-1"> <!-- Change items-end to flex-1 -->
                <h2 class="text-white text-xl font-semibold mb-2 text-right">2008</h2> <!-- Add text-right class -->
                <p class="text-white mb-2 text-right"> <!-- Add text-right class -->
                  Seiring berjalannya waktu, isu pembubaran PTK pun terjawab dengan tetap eksisnya PTK di sisdiknas kita. FMKI mulai terlupakan. AD/ART yang telah tersusun rapi tidak terlaksana dan cenderung terbengkalai. Kepengurusan FMKI pun belum juga diperbaharui. Menyadari keadaan itu, perwakilan lembaga formal kemahasiswaan dari beberapa PTK di Jabodetabek berkeinginan untuk mengaktifkan kembali FMKI yang selama ini mati suri. Melalui pertemuan pendahuluan yang pelaksanaannya disisipkan pada PTK Expo tanggal 28-29 Juni 2008, acara temu FMKI ini mulai digagas dengan BEM STAN menjadi panitia acara tersebut.
                </p>
              </div>
              <div class="flex flex-col items-end ml-6 w-32">
                <img src="@/assets/justice2.png" alt="Justice" class="object-cover rounded" />
              </div>
            </div>
          </div>

          <div class="py-0">
            <div
              class="bg-cyan-500 bg-opacity-50 shadow rounded-lg overflow-hidden flex p-4 items-start hover:shadow-lg transition-shadow duration-300">
              <div class="flex flex-col items-start mr-6 w-32">
                <img src="@/assets/justice2.png" alt="Justice" class="object-cover rounded" />
              </div>
              <div class="flex-1">
                <h2 class="text-white text-xl font-semibold mb-2">2008</h2>
                <p class="text-white mb-2">
                  Akhirnya, pada Sabtu, 2 Agustus 2008, BEM STAN mengadakan Konferensi Forum Mahasiswa Kedinasan Indonesia (FMKI). Jumlah Perguruan Tinggi Kedinasan (PTK) yang dapat hadir dalam konferensi sejumlah 10 PTK dari 24 PTK yang berhasil dihubungi dan diundang antara lain [STSN], [STP], [STIS], [STKS], [AMG], [AIM], [STTN], [Poltekkes Bandung], [IPDN], dan [STAN] sebagai tuan rumah. Konferensi FMKI pada kesempatan ini memiliki empat agenda utama : pengaktifan kembali FMKI, pembentukan pengurus FMKI, peninjauan kembali AD/ART FMKI, dan sharing event antar-PTK.
                </p>
              </div>
            </div>
          </div>

          <div class="py-2">
            <div class="bg-cyan-500 bg-opacity-50 shadow rounded-lg overflow-hidden flex p-4 items-start hover:shadow-lg transition-shadow duration-300">
              <div class="flex flex-col items-end flex-1"> <!-- Change items-end to flex-1 -->
                <h2 class="text-white text-xl font-semibold mb-2 text-right">2019</h2> <!-- Add text-right class -->
                <p class="text-white mb-2 text-right"> <!-- Add text-right class -->
                  Pada Tahun 2019, Legalitas FMKI berhasil didapatkan sebagai Forum Tertinggi Mahasiswa Kedinasan Indonesia berdasarkan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor AHU-0002393.AH.01.07.Tahun 2019 tentang Pengesahan Pendirian Badan Hukum Forum Mahasiswa Kedinasan Indonesia dengan wilayah Depok sebagai kantor pusat.
                </p>
              </div>
              <div class="flex flex-col items-end ml-6 w-32">
                <img src="@/assets/justice2.png" alt="Justice" class="object-cover rounded" />
              </div>
            </div>
          </div>
          
        </div>

        <div v-if="activeSection === 'hukum'">
          <h1 class="text-2xl font-bold mb-2">Dasar Hukum</h1>
          <div class="bg-white-200 p-4 rounded-lg shadow-md mt-6 flex flex-col items-center">
            <div class="mb-4  w-24 h-24">
              <img src="@/assets/book.png" alt="Book" class="object-cover rounded" />
            </div>
            <div class="font-semibold text-center">
              <p>
                Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor: AHU-0002375.AH.01.07 Tahun 2019 tentang Pengesahan Pendirian Badan Hukum Forum Mahasiswa Kedokteran Indonesia.
              </p>
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
      activeSection: 'sejarah',
    };
  },
};
</script>

<style scoped>
.btn {
  padding: 10px;
  cursor: pointer;
}
.btn-active {
  background-color: teal;
  color: white;
}
</style>
