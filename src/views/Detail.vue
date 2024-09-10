<template>
    <div class="p-4">
      <!-- Breadcrumb -->
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/" style="color: #0093AD;">Beranda</a></li>
          <li><a href="/KajianStrategis/" style="color: #0093AD;">Kajian Strategis</a></li>
          <li><a href="/Detail/">Detail</a></li>
        </ul>
      </div>
  
      <!-- Judul -->
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
            judul: "Permendikbut-ristek, Upaya Konkret Melawan Predator Seksual Kampus",
            tanggal: "2021-11-30 15:14:00",
            gambar: fmki1,
            alt: "Press Release Image",
            konten: [
              `Perguruan tinggi adalah bagian dari jenjang pendidikan formal. Pada jenjang ini setiap mahasiswa diberi kesempatan mengeksplorasi bidang keilmuan yang lebih spesifik. Kecerdasan intelektual yang tinggi dan karakter yang baik menjadi hal yang beriringan dalam proses pembelajaran di perguruan tinggi, oleh karena itu, mahasiswa dituntut untuk menjadi pribadi yang matang secara emosional dan intelektual. Keberhasilan dalam proses pematangan emosional dan intelektual tersebut dipengaruhi banyak faktor, salah satunya adalah jaminan rasa aman dan perlindungan dari segala bentuk kekerasan termasuk kekerasan seksual.`,
              `Untuk menindaklanjuti tingginya angka kekerasan seksual yang terjadi di lingkungan perguruan tinggi maka disahkannya Permendikbud No. 30 Tahun 2021. Dengan di sahkannya Permendikbud tersebut maka FMKI Mengeluarkan pernyataan sikap terhadap hal tersebut. Besar harapan kami agar Permendikbud ini dapat dijalankan dengan baik kedepannya.`,
            ],
          },
          {
            id: 2,
            judul: "Refleksi 76 Tahun Indonesia Merdeka",
            tanggal: "2021-08-18 10:59:00",
            gambar: fmki4,
            alt: "Alt Text Gambar Artikel 2",
            konten: [
            `Tepat pada hari ini Indonesia telah berumur 76 tahun. Tandanya 76 tahun Indonesia telah merdeka. Kita masih bisa merasakan euforia kemerdekaan di sekitar kita walaupun sedang dalam masa pandemi. Tak lupa kita juga mengingat para pahlawan yang dulu berjuang gigih dan bertaruh nyawa fokus untuk 1 hal saja yaitu kemerdekaan. Sekarang yg bisa kita lakukan sekarang yaitu kita harus bisa mengisi dan memaknai hakikat kemerdekaan Indonesia dengan sepenuhnya.`,
            `Tanyalah kepada dirimu, apakah kamu sebagai bangsa Indonesia telah merdeka sepenuhnya?
            Apakah telah terpenuhi hak-hakmu sebagai bangsa yang merdeka? Apakah kamu telah terlindungi sepenuhnya?
            Mari kita renungi, merefleksikan diri, dan bersama-sama memaknai kemerdekaan ini.`,        
            ],
          },
          {
            id: 3,
            judul: "#SaveKPK : Jadi, Sekarang Jargon KPK itu Berani Jujur Hebat atau Berani Jujur Pecat?",
            tanggal: "2021-06-24 20:41:00",
            gambar: fmki8,
            alt: "Alt Text Gambar Arotikel 2",
            konten: [
              `Alerta! Alerta!`,
              `KPK, pahlawan kita, yang sangat berani memberantas kejamnya koruptor dan buruknya korupsi sedang mengalami bencana. Berbagai permasalahan bermunculan untuk melemahkan pahlawan kita dari mulai revisi UU KPK, serba-serbi polemik pengalihan status pegawai menjadi ASN dengan tes TWK yang berujung penonaktifan 51 pegawai yang tidak memenuhi syarat kelulusan.`,
              `Hidupkan reformasi
               Selamatkan KPK,Pahlawan Revolusi Kami!
               Tiadakan Korupsi Selamanya!`,
              `Panjang Umur Perjuangan!
               Panjang Umur Hal-Hal Baik!`,
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
  