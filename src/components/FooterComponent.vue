<template>
  <footer class="bg-gray-100 text-gray-700 py-10">
    <div class="container mx-auto px-4 ">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- First Column (Logo and Address) -->
        <div>
          <img src="@/assets/logofix.png" alt="BPS Logo" class="h-14 mb-2" />
          <p>
            Jl. Manukwari Kelurahan Satrean Kecamatan Kanigoro Kabupaten Blitar - Jawa Timur<br>
            email: bps3505@bps.go.id
          </p>

        </div>
        

        <!-- Second Column (Tentang BPS) -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Layanan OklikStat</h3>
          <ul>
            <li><a href="#" class="hover:text-gray-900">Website BPS</a></li>
            <li><a href="#" class="hover:text-gray-900">Potik</a></li>
            <li><a href="#" class="hover:text-gray-900">Desa Cantik</a></li>
            <li><a href="#" class="hover:text-gray-900">Romantik</a></li>
            <li><a href="#" class="hover:text-gray-900">Statistik Sektoral</a></li>
            <li><a href="#" class="hover:text-gray-900">Sepaham</a></li>
          </ul>
        </div>

        <!-- Third Column (Tentang PST) -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Tentang PST</h3>
          <ul>
            <li><a href="#" class="hover:text-gray-900">Pelayanan Statistik Terpadu</a></li>
            <li><a href="#" class="hover:text-gray-900">Standar Pelayanan</a></li>
            <li><a href="#" class="hover:text-gray-900">Maklumat Pelayanan</a></li>
            <li><a href="#" class="hover:text-gray-900">Kompensasi Pelayanan</a></li>
          </ul>
        </div>


        <!-- Fourth Column (Media Sosial) -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Media Sosial Kami</h3>
          <div class="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/bps.kabblitar/" class="text-gray-600 hover:text-gray-800"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.instagram.com/bpsblitarkab_official" class="text-gray-600 hover:text-gray-800"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://wa.me/6285259173487" class="text-gray-600 hover:text-gray-800"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="https://www.tiktok.com/@bpsblitarkab" class="text-gray-600 hover:text-gray-800"><i class="fab fa-tiktok fa-2x"></i></a>
          </div>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 border-t border-gray-300 pt-4 text-center">
        <p>© 2024 BPS Kabupaten Blitar. Semua Hak Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@media (max-width: 1018px) {
  .md\:pl-60 {
    padding-left: 0; /* Menghapus padding kiri pada bagian logo dan teks di sebelah kiri */
  }
  .md\:pr-80 {
    padding-right: 0; /* Menghapus padding kanan pada bagian ikon media sosial di sebelah kanan */
  }
}
</style>

