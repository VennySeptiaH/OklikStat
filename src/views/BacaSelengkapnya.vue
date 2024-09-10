<template>
  <div class="p-4">
    <!-- Breadcrumb -->
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/" style="color: #0093AD;">Beranda</a></li>
        <li><a href="/PressRelease/" style="color: #0093AD;">Press Release</a></li>
        <li><a href="/BacaSelengkapnya/">Detail</a></li>
      </ul>
    </div>

    <!-- Judul -->
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

    <!-- Artikel -->
    <div class="container mx-auto p-4" v-if="artikel">
      <h1 class="text-2xl font-bold mb-4 text-cyan-600">{{ artikel.judul }}</h1>
      <button class="btn btn-sm mb-4 text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white" @click="navigateToDetail(artikel.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12t.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2t2.125.875T21 5t-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12t-.025.363t-.075.337l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19t-.875 2.125T18 22"/></svg>
        Bagikan
      </button>
      <div class="flex items-center justify-between mb-4">
        <p class="text-sm">Tanggal Terbit : {{ artikel.tanggal }}</p>
      </div>

      <!-- Gambar -->
      <div class="flex justify-center mb-4">
        <img :src="artikel.gambar" :alt="artikel.alt" class="w-1/2">
      </div>

      <!-- Konten Artikel -->
      <div class="prose max-w-none text-justify">
        <div v-for="(paragraf, index) in artikel.konten" :key="index" class="mb-4">
          <p>{{ paragraf }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fmki1 from '@/assets/FMKI1.jpg';
import fmki2 from '@/assets/FMKI2.jpg';
import fmki3 from '@/assets/FMKI3.jpg';
import fmki4 from '@/assets/FMKI4.jpg';
import fmki5 from '@/assets/FMKI5.jpg';
import fmki6 from '@/assets/FMKI6.jpeg';
import fmki7 from '@/assets/FMKI7.jpg';
import fmki8 from '@/assets/FMKI8.png';
import fmki9 from '@/assets/FMKI9.jpeg';
import fmki10 from '@/assets/FMKI10.jpg';

export default {
  data() {
    return {
      artikel: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.getArtikelById(id);
  },
  methods: {
    getArtikelById(id) {
      const dataArtikel = [
        {
          id: 1,
          judul: "Audensi FMKI x MPR RI",
          tanggal: "2023-04-03 16:33:00",
          gambar: fmki7,
          alt: "Press Release Image",
          konten: [
            `Jakarta - Forum Masyarakat Redhaedwan Indonesia (FMRI) melaksanakan audiensi dengan Majelis Permusyawaratan Rakyat Republik Indonesia (MPR RI) yang diadakan oleh Wakil Ketua MPR RI Dr. H.M. Hidayat Nur Wahid, MA, di Gedung Nusantara III MPR RI, Jakarta. Audiensi tersebut berlangsung pada Kamis, 1 Juni 2023, yang dihadiri oleh perwakilan FMRI dari berbagai wilayah Indonesia.`,
            `Dalam dialog dengan para mahasiswa pengurus pusat FMKI tersebut, Wakil Ketua MPR RI Dr. H.M. Hidayat Nur Wahid, Lc, MA mendengarkan semua keluh kesah, uneg-uneg dan pertanyaan seputar permasalahan bangsa, salah satunya soal fenomena kekerasan yang masih saja terjadi di berbagai perguruan tinggi kedinasan Indonesia. Mewakili pengurus, Kepala Bidang Sosial Politik FMKI Ihza Maulana Ruhyat dan Ketua Tim Khusus Anti Kekerasan FMKI Reynaldi Saragih menyampaikan beberapa hal terkait kekerasan di lingkup perguruan tinggi kedinasan di Indonesia, yang hingga kini masih terjadi.`,
            `Dari pengamatan FMKI, dalam 2 tahun berturut-turut kekerasan sudah terjadi dalam kurun waktu 2 tahun belakangan ini, yang terakhir kejadian di tahun 2023 yang dialami seorang taruna Poltekpel Surabaya, yang menyebabkan korban meninggal dunia. Juga menyampaikan beberapa hasil kajian strategis mengenai Ketahanan Pangan Nasional, Ketahanan Energi Nasional, dan Pengesahan UU KUHP.`,
            `“Itulah, yang saat ini menjadi salah satu concern kami dalam membenahi, menanggulangi dan memitigasi kekerasan yang terjadi.  Berbagai upaya kami lakukan termasuk menggaungkan anti kekerasan di lingkup perguruan tinggi kedinasan secara massif.  Dan, kami akan terus berkomitmen menggaungkannya terus,” ujar Ihza.`,
            `Diuungkapkan Ihza, untuk meminimalisir bahkan menghilangkan aksi kekerasan tersebut di masa depan, FMKI mengusulkan perlunya dibuat regulasi yang tegas tentang kekerasan secara general, baik kekerasan fisik non fisik dan seksual di lingkup perguruan tinggi kedinasan. “Untuk kekerasan seksual sudah ada regulaisnya, yang belum regulasi untuk kekerasan fisik dan non fisik,” tambahnya.`,
            `Merespon kegelisahan mahasiswa tersebut, HNW menyampaikan bahwa dalam negara demokrasi seperti di Indonesia, telah disepakati bahwa Indonesia adalah negara hukum seperti yang diamanahkan UUD Pasal 1 ayat (3).  Jadi, segala permasalahan memang harus ada regulasinya sehingga penyelesaiannya kemudian menghadirkan keadilan dan rujukan yang bisa dipakai oleh semuanya.`,
            `HNW juga mendukung dan menyetujui pendapat mahasiswa soal perlunya regulasi kekerasan yang diperluas, bukan saja hanya kekerasan seksual tapi kekerasan fisik dan non fisik. “Saya setuju harus ada perluasan regulasinya untuk itu,” imbuhnya.`,
            `Satu hal yang harus diperhatikan betul oleh Kemendikbud sebagai pihak yang mengelola pendidikan nasional, sebelum regulasi dibentuk sebagai salah satu cara untuk mengatasi kekerasan di lembaga pendidikan, HNW mengungkapkan perlunya terlebih dahulu ditumbuh kembangkannya iklim sekolah maupun kampus yang menghadirkan suasana yang demokratis, guyub, rukun, bersaudara dan saling menghormati. Sehingga dengan demikian, tidak ada ruang untuk mengedepankan kekerasan sebagai sebuah solusi.`,
            `“Kalau hal ini terbangun, maka munculnya regulasi akan membantu menghadirkan suatu solusi yang mudah untuk dilaksanakan,” pungkasnya.`,
            `Berangkat dari hal tersebut, FMKI melalui program kerja Bidang Sosial Politik tengah bersiap menyusun Naskah Akademik mengenai kekerasan di lingkup Perguruan Tinggi Kedinasan Indonesia sebagai langkah konkret aktualisasi Anti Kekerasan di Lingkup Perguruan Tinggi Kedinasan Indonesia. Harapannya kedepan dengan tersusunnya Naskah Akademik tersebut dapat melangkah lebih jauh untuk melaksanakan Public Hearing dengan Komisi III dan Komisi X DPR RI agar regulasi mengenai kekerasan di lingkup Perguruan Tinggi Kedinasan Indonesia khususnya dan umumnya Perguruan Tinggi Indonesia dapat segera tercipta dan menghasilkan legitimasi yang lebih konkret.`,
            `Kepada para mahasiswa perguruan tinggi kedinasan yang tergabung dalam FMKI tersebut, HNW juga menyampaikan apresiasinya atas kepedulian mereka menghadirkan solusi terhadap permasalahan yang ada di seputar mereka.`
          ],
        },
        {
          id: 2,
          judul: "RAKERNAS FMKI 2022",
          tanggal: "2023-01-09 14:17:00",
          gambar: fmki4,
          alt: "Alt Text Gambar Artikel 2",
          konten: [
          `Rapat Kerja Nasional (RAKERNAS) Forum Mahasiswa Kedinasan Indonesia (FMKI) tahun 2022 telah dilaksanakan secara hybrid pada Jumat–Minggu, 25–27 November 2022 bertempat di Hotel Tasneem, Yogyakarta dan Zoom Meeting. RAKERNAS merupakan program kerja awal yang dilaksanakan oleh Ketua Umum DPP FMKI terpilih.  RAKERNAS diikuti oleh perwakilan mahasiswa, taruna, maupun praja dari Perguruan Tinggi Kedinasan (PTK) yang tergabung dalam keanggotaan FMKI, Dewan Pimpinan Pusat (DPP) FMKI periode 2022/2023, Dewan Permusyawaratan (DEMUS) FMKI periode 2022/2023, Koordinator Wilayah FMKI, Forum Mahasiswa Kedinasan Daerah (FMKD), dan Ikatan Alumni Pengurus (IKA) FMKI periode 2022/2023.`,
          `Agenda dalam RAKERNAS FMKI tahun 2022 kali ini, yaitu:`,
          `1. Diklat calon pengurus Dewan Pimpinan Pusat (DPP) dan Dewan Permusyawaratan
          (DEMUS) FMKI periode 2022/2023 berupa seminar dengan materi leadership oleh Bapak Dr. M.T. Natalis Situmorang (Dosen Teknik Lingkungan Universitas Sahid, Jakarta), materi keorganisasian oleh Bapak Ayub Wahyudi (Protokoler Kwartir Nasional), dan materi mengenai FMKI oleh Fajar Putra Prastina Rumelawanto, S.H, S.Tr.Pas (Ketua Umum DPP FMKI periode 2020/2021)`,
          `2. Pelantikan pengurus Dewan Pimpinan Pusat (DPP) FMKI periode 2022/2023 oleh Ketua DPP FMKI periode 2022/2023, Zafira Naja Sakina `,
          `3. Pelantikan pengurus Dewan Permusyawaratan (DEMUS) FMKI periode 2022/2023 oleh Ketua DEMUS FMKI periode 2022/2023, Ibnu Arif Risyad`,
          `4. Pelantikan Pengurus Ikatan Alumni Pengurus (IKA) FMKI periode 2022/2023 oleh Ketua Ikatan Alumni Pengurus FMKI, Dhonny Fatwa Ammarul Akbar`,
          `5. Penetapan Iuran PTK untuk periode kepengurusan 2022/2023`,
          `6. Pembahasan dan Penetapan Program Kerja Nasional FMKI untuk periode kepengurusan 2022/2023`,
          `7. Open Tender Program Kerja Nasional FMKI  untuk periode kepengurusan 2022/2023`,        
          ],
        },
        {
          id: 3,
          judul: "Semarak Festival Seni Nasional (FSN) 2022",
          tanggal: "2022-05-26 16:22:00",
          gambar: fmki8,
          alt: "Alt Text Gambar Arotikel 2",
          konten: [
            `Telah dilaksanakan Festival Seni Nusantara (FSN) yang merupakan suatu bentuk kompetisi tingkat nasional yang mempertandingkan beberapa cabang seni antar perguruan tinggi kedinasan. Kegiatan FSN ini merupakan suatu bentuk aksi nyata dari langkah untuk mempererat tali persahabatan antar perguruan tinggi kedinasan, serta meningkatkan daya kreativitas dan semangat sportivitas antar mahasiswa/i, taruna/i, dan Praja Perguruan Tinggi Kedinasan.`,
            `Festival Seni Nusantara ini merupakan kegiatan tahunan FMKI untuk terus mengingat serta menumbuhkembangkan budaya kesenian Indonesia. Sehingga terbentuklah kegiatan tahunan ini dengan mengadakan kompetisi cabang seni tingkat nasional yang ditujukan serta diikuti oleh Perguruan Tinggi Kedinasan yang ada di Indonesia.`,
            `Dalam rangka Festival Seni Nusantara 2022, STPN Yogyakarta menjadi tuan rumah untuk kedua kalinya dalam kegiatan ini. Namun ada hal yang berbeda yaitu ketika tahun 2018 STPN menjadi tuan rumah, FSN belum menjadi program kerja Nasional FMKI. Namun pada FSN 2022 kali ini, STPN mematenkan diri sebagai tuan rumah dalam kegiatan nasional yang menjadi salah satu Program Kerja Nasional FMKI.`,
            `Dengan tema “Berjiwa Seni, Merajut Harmoni”, tema ini pun diharapkan dapat memantik jiwa kreativitas mahasiswa/i, taruna/i, praja Perguruan Tinggi Kedinasan se-Indonesia terhadap budaya Indonesia. Festival Seni Nusantara diharapkan mampu memberi perhatian terhadap kebudayaan Nusantara, sekaligus memberi perhatian kepada masyarakat pada umumnya tentang pelestarian budaya dan mampu bangkit walaupun masih berada di tengah situasi pandemi Covid-19 ini.`,
            `Kegiatan FSN ini telah diikuti oleh 8 perguruan tinggi kedinasan se-Indonesia. Kegiatan ini berlangsung selama 2 hari dan dilaksanakan di Pendopo Sasana Widya Bhumi STPN. Pada festival tahun ini ada 7 perlombaan yang dilombakan, diantaranya:`,
            `1. Band`,
            `2. Tari Kreasi Daerah`,
            `3. Vocal Group`,
            `4. Musikalisasi Puisi`,
            `5. Beatbox`,
            `6. Fotografi`,
            `7. Short Movie`,
            `Festival ini diadakan mulai tanggal 19-20 Februari 2022 dengan pelaksanaan menerapkan protokol kesehatan ketat selama kegiatan berlangsung, dan berlangsung lancar sehingga mendapatkan apresiasi tinggi karena telah berhasil melaksanakan kegiatan di tengah kondisi pandemi. Adapun peserta yang mengikuti dari sekolah tinggi kedinasan antara lain:`,
            `1. Politeknik Imigrasi`,
            `2. Sekolah Tinggi Transportasi Darat (STTD)`,
            `3. Institut Pemerintahan Dalam Negeri (IPDN)`,
            `4. Politeknik Keuangan Negara Sekolah Tinggi Akutansi Negara (STAN)`,
            `5. Politektik Sekolah Tinggi Teknologi Tekstil`,
            `6. Politeknik Pelayaran Banten`,
            `7. Politeknik Pengembangan Pertanian Yogyakarta Magelang`,
            `8. Sekolah Tinggi Pertanahan Nasional`,
            `9. Polteknik Teknologi Nuklir Indonesia`,
          ],
        },
        {
          id: 4,
          judul: "Rapat Koordinasi Pelaksanaan Talkshow SIPENCATAR dan Expo Perguruan Tinggi Tahun 2022",
          tanggal: "2022-03-20 15:03:00",
          gambar: fmki6,
          alt: "Alt Text Gambar Arotikel 2",
          konten: [
          `Badan Pengembangan Sumber Daya Manusia Perhubungan KEMENHUB RI menyelenggarakan kegiatan Rapat Koordinasi Pelaksanaan Talkshow SIPENCATAR dan Expo Perguruan Tinggi Tahun 2022 pada hari Jum’at, 11 Maret 2022 pukul 09.30 WIB menggunakan media Zoom Clouds Meeting. Kegiatan ini dihadiri setidaknya 22 peserta yang terdiri dari perwakilan Forum Mahasiswa Kedinasan Indonesia, Insan Muda Transportasi, dan Badan Pengembangan SDM Perhubungan KEMENHUB RI. Kegiatan ini dilatar belakangi untuk menghasilkan kader-kader insan muda tranportasi yang berkualitas dan bisa menjawab tantangan zaman untuk Indonesia Maju, dimana acara Talkshow SIPENCATAR dan Expo Perguruan Tinggi ini diharapkan memberikan wawasan dan informasi menarik untuk siswa-siswa SMA,SMK,MA Sederajat di Indonesia. Badan Pengembangan SDM KEMENHUB RI turut mengundang Ketua Umum Dewan Pimpinan Pusat Forum Mahasiswa Kedinasan Indonesia dan Ketua Insan Muda Transportasi (IMUT) untuk membantu menyukseskan kegiatan ini secara meriah. Kegiatan ini bertujuan untuk mendukung kegiatan Penerimaan Calon Taruna/Siswa tahun 2022 dipandang oleh masyarakat maka perlu dilaksanakan sosialisasi Perguruan Tinggi.  Dalam menyikapi hal tersebut Pusat Pengembangan SDM Perhubungan Darat sebagi Pembina lembaga perguruan tinggi bidang transportasi darat dan perkeretaapian akan melaksanakan kegiatan Talkshow dan Expo Perguruan Tinggi. `,
          `Ketua Umum DPP FMKI, Saudara Dhonny Fatwa Ammarul Akbar menyampaikan, “FMKI sangat bangga dan bersyukur bisa menjadi bagian dalam mensukseskan program KEMENHUB yakni Talkshow Sipencatar dan Expo Perguruan Tinggi ini, karena ini sejalan dengan visi dan misi FMKI yakni melahirkan generasi yang mandiri, berakhlaq, serta profesional ditunjang untuk memberikan manfaat bagi kehidupan sekitar, yang pada kali ini adalah siswa SMA Sedejarat, dan FMKI siap mendukung dan mensukseskan 100% dari segi kontribusi SDM untuk berkolaborasi dalam penyampaian materi terkait kampus kedinasan anggota FMKI” `,
          ],
        },
        {
          id: 5,
          judul: "Peninjauan Vaksinasi Covid-19 BEM PKN STAN",
          tanggal: "2021-08-27 14:48:38",
          gambar: fmki9,
          alt: "Alt Text Gambar Arotikel 2",
          konten: [
          `BEM KM PKN STAN berkolaborasi dengan FMKI pada tanggal 24 hingga 26 Agustus 2021 untuk menyelenggarakan kegiatan Vaksinasi Indonesia Bangkit!. Sasaran vaksinasi ini untuk mahasiswa dan masyarakat yang ada di sekitar lingkungan kampus PKN STAN.`,
          `Pada kegiatan ini FMKI mengambil peran yakni sebagai peninjau dan sekaligus mengirim 1 orang sebagai relawan vaksinasi BEM KM PKN STAN.`,
          `Melalui kegiatan ini FMKI yang diwakili oleh ketua Umum DPP dan juga Ketua Demus FMKI juga melakuan peninjauan langsung ke lokasi yakni di Kampus PKN STAN yang terletak di Jalan Bintaro Utama Sektor V, Tangerang Selatan, Banten. Kegiatan dilakukan dengan peninjauan langsung ke lokasi, 1 orang delegasi FMKI sebagai tim relawan vaksinasi BEM KM PKN STAN bagian administrasi(observasi). Satu relawan dari FMKI membantu mempersiapkan terkait bidang administrasi(observasi) dalam pelaksanaan vaksinasi, serta bersosialisasi kepada masyarakat terkait vaksinasi.`,
          `Vaksinasi ini diselenggarakan dengan kuota sebanyak 3000 bagi masyarakat umum. Selain itu, dalam kegiatan ini BEM PKN STAN turut membagikan sebanyak 3000 paket sembako bagi mahasiswa dan masyarakat umum. Kegiatan ini merupakan bentuk kontribusi nyata untuk Indonesia, bentuk pengabdian kepada masyarakat, bersama-sama memulihkan Indonesia agar segera bangkit dari pandemi COVID-19.`,
          ],
        },
        {
          id: 6,
          judul: "Munaslub : Pelantikan Ketua Umum Terpilih dan Ketua Demus FMKI",
          tanggal: "2021-06-18 07:44:38",
          gambar: fmki10,
          alt: "Alt Text Gambar Arotikel 2",
          konten: [
          `Musyawarah Nasional Luar Biasa Forum Mahasiswa Kedinasan Indonesia merupakan MUNASLUB lanjutan dari MUNASLUB 5 Juni 2021 tujuan utama diselenggarakannya MUNASLUB adalah pelantikan Ketua Umum DPP FMKI dan juga Ketua DEMUS FMKI. Kegiatan ini dihadiri Ketua Umum DPP FMKI terpilih, Ketua DEMUS terpilih, Perguruan Tinggi Kedinasan, FMKD, Koordinator Wilayah (KORWIL), DEMUS yang tergabung di dalam Forum Mahasiwa Kedinasan Indonesia pada 13 Juni 2021.`,
          `Acara ini diawali dengan pembukaan oleh pembawa acara yang disusul dengan pembacaan berita acara MUNASLUB 5 Juni 2021. Kemudian pelantikan Ketua DEMUS FMKI yang selanjutnya melantik juga seluruh anggota DEMUS. Setelah pelantikan Ketua DEMUS FMKI beserta anggota DEMUS disusul dengan pelantikan Ketua Umum DPP FMKI yang selanjutnya dilantik juga seluruh DPP FMKI. Seluruh peserta MUNASLUB menjadi saksi pergantian kepengurusan FMKI yang membawa harapan baru untuk kemajuan FMKI di masa mendatang.`,
          ],
        },
        {
          id: 7,
          judul: "Munaslub : Pemilihan Ketua Umum FMKI Baru",
          tanggal: "2021-06-11 07:31:00",
          gambar: fmki10,
          alt: "Alt Text Gambar Arotikel 2",
          konten: [
          `Musyawarah Nasional Luar Biasa Forum Mahasiswa Kedinasan Indonesia (Munaslub FMKI) diselenggarakan dengan tujuan mengisi Vacuum of Power didalam kepengurusan DPP FMKI dengan agenda utama pemilihan ketua umum FMKI baru. Kegiatan ini dilaksanakan pada tanggal 5 Juni 2021 dengan dihadiri sebanyak 47 Perguruan Tinggi Kedinasan yang tergabung di dalam Forum Mahasiwa Kedinasan Indonesia. Kegiatan ini dilaksanakan sebagai wujud persatuan PTK seluruh indonesia dan kepedulian terhadap organisasi, dimana hasil utama dari MUNASLUB ini adalah terpilihnya Ketua Umum FMKI yakni Ikhsanudin asal PTK Politeknik ATK Yogyakarta, Menggantikan Ketua Umum DPP sebelumnya yaitu Sija’ Holil yang mengundurkan diri dari jabatannya.`,
          ],
        },
        {
          id: 8,
          judul: "Judul Artikel 2",
          tanggal: "Tanggal Terbit Artikel 2",
          gambar: "URL Gambar Artikel 2",
          alt: "Alt Text Gambar Arotikel 2",
          konten: "Konten Artikel 2"
        },
        // Tambahkan data artikel lainnya di sini
      ];

      const artikelDitemukan = dataArtikel.find(artikel => artikel.id == id);

      if (artikelDitemukan) {
        this.artikel = artikelDitemukan;
      } else {
        console.error('Artikel tidak ditemukan.');
      }
    },
    navigateToDetail(id) {
      // Mengarahkan ke halaman detail artikel dengan ID yang diberikan
      this.$router.push({ name: 'detail', params: { id: id } });
    }
  }
};
</script>
