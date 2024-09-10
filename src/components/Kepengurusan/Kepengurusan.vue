<template>
  <div class="flex flex-col justify-center items-center bg-white pt-4 pb-100 frame">
    <div class="max-w-xs text-sm breadcrumbs">
      <ul>
        <li>Beranda</li>
        <li>Tentang FMKI</li>
        <li>Kepengurusan</li>
      </ul>
    </div>

    <div>
      <div class="text-center">
        <h1 class="text-4xl font-bold">
          <span class="text-gray-800">KEPENGURUSAN</span> <span class="text-cyan-600">FMKI</span>
        </h1>
        <div class="flex justify-center mt-4 mb-4">
          <div class="h-1 w-16 bg-cyan-600"></div>
          <div class="h-1 w-4 bg-cyan-400"></div>
          <div class="h-1 w-4 bg-cyan-600"></div>
        </div>
        <p class="text-gray-600 text-lg">Informasi terkait Kepengurusan FMKI</p>
        <br />
        <p class="text-gray-600 font-bold text-2xl">Dewan Pengurus Pusat</p>
        <p class="text-gray-600 mt-1 text-lg">Tahun 2023-2024</p>
      </div>
    </div>
    <br />

    <ul
      class="menu menu-vertical lg:menu-horizontal bg-white rounded-box w-[962px] h-[79px] justify-center"
      style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <li v-for="(item, index) in items" :key="index" class="h-full mt-3">
        <a
          :class="[selectedItem === index ? 'font-bold text-blue-500' : 'font-bold text-gray-700']"
          @click="selectItem(index)"
        >
          {{ item }}
        </a>
      </li>
    </ul>

    <!-- Content for 'BPH' -->
    <div v-if="selectedItem === 0" class="justify-center items-center mx-4 w-full">
      <p class="text-gray-600 mt-8 text-center font-bold text-2xl">Badan Pengurus Harian</p>
    </div>
    <div v-if="selectedItem === 0" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="textarea-container text-center p-4 bg-white mt-11">
          <p class="text-gray-600 font-bold text-xl">VISI</p>
          <textarea
            class="text-center w-[300px] h-[300px] custom-textarea mt-2 p-2 bg-white"
            style="font-size: 13px"
            rows="4"
            readonly
          >
MENCIPTAKAN FORUM MAHASISWA KEDINASAN INDONESIA YANG SOLID DAN MENINGKATKAN SEMANGAT KEBERMANFAATAN BAGI MAHASISWA/TARUNA DAN/PRAJA KEDINASAN SELURUH INDONESIA.
            </textarea
          >
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-2 mb-6 mt-2">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="textarea-container text-center p-4 bg-white mt-11">
          <p class="text-gray-600 font-bold text-xl">MISI</p>
          <textarea
            class="text-center w-[300px] h-[300px] custom-textarea mt-2 p-2 bg-white"
            style="font-size: 13px"
            rows="4"
            readonly
          >
MENCIPTAKAN SINERGITAS YANG ERAT ANTAR MAHASISWA/TARUNA DAN/PRAJA KEDINASAN SELURUH INDONESIA SERTA MENCIPTAKAN FMKI YANG INFORMATIF BAGI MAHASISWA/TARUNA DAN/PRAJA KEDINASAN SELURUH INDONESIA SERTA MASYARAKAT LUAS.
            </textarea
          >
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 0" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 0" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Ketua Umum</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content for 'Perencanaan Pengembangan' -->
    <div v-if="selectedItem === 1" class="justify-center items-center mt-4 w-full">
      <p class="text-gray-600 mt-8 mb-8 text-center font-bold text-2xl">
        Bidang Perencanaan dan Pengembangan
      </p>
    </div>

    <div v-if="selectedItem === 1" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Koordinator</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 1" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content for 'Komunikasi Informasi' -->
    <div v-if="selectedItem === 2" class="justify-center items-center mt-4 w-full">
      <p class="text-gray-600 mt-8 mb-8 text-center font-bold text-2xl">
        Bidang Komunikasi dan Informasi
      </p>
    </div>

    <div v-if="selectedItem === 2" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Koordinator</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 2" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content for 'Sosial Politik' -->
    <div v-if="selectedItem === 3" class="justify-center items-center mt-4 w-full">
      <p class="text-gray-600 mt-8 mb-8 text-center font-bold text-2xl">
        Bidang Sosial dan Politik
      </p>
    </div>

    <div v-if="selectedItem === 3" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Koordinator</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 3" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content for 'Badan Usaha' -->
    <div v-if="selectedItem === 4" class="justify-center items-center mt-4 w-full">
      <p class="text-gray-600 mt-8 mb-8 text-center font-bold text-2xl">Bidang Badan Usaha</p>
    </div>

    <div v-if="selectedItem === 4" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Koordinator</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 4" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content for 'Humas Protokoler' -->
    <div v-if="selectedItem === 5" class="justify-center items-center mt-4 w-full">
      <p class="text-gray-600 mt-8 mb-8 text-center font-bold text-2xl">
        Bidang Hubungan Masyarakat dan Protokoler
      </p>
    </div>

    <div v-if="selectedItem === 5" class="flex justify-center items-center w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Koordinator</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem === 5" class="flex justify-center items-center mt-4 mb-6 w-full">
      <div class="flex flex-row items-center mx-4">
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="card w-[250px] h-[340px] border-4 border-cyan-600 shadow-xl mx-4">
          <figure class="bg-transparent">
            <img src="@/assets/kepengurusan/ketua.png" alt="Shoes" class="w-full object-cover" />
          </figure>
          <div class="card-body bg-cyan-600 h-[115px] flex flex-col items-center justify-center">
            <h2 class="card-title text-white text-center w-[181px]">Ade Awliya Rahman</h2>
            <p class="text-white text-center">Anggota</p>
            <div class="icon-container">
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
              </a>
              <a href="mailto:youremail@example.com">
                <img src="@/assets/email.png" alt="Email" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: [
        'BPH',
        'Perencanaan Pengembangan',
        'Komunikasi Informasi',
        'Sosial Politik',
        'Badan Usaha',
        'Humas Protokoler'
      ],
      selectedItem: 0 as number | null // Nilai awal item yang dipilih
    }
  },
  methods: {
    selectItem(index: number) {
      this.selectedItem = index // Mengatur item yang dipilih
    }
  }
})
</script>

<style>
.menu {
  box-shadow: 9px 11px 9px rgba(0, 0, 0, 0.3);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Adjust spacing between icons as needed */
}

.icon {
  width: 26px; /* Adjust icon size as needed */
  height: 26px;
  transition: transform 0.3s;
}

.icon:hover {
  transform: scale(1.1); /* Enlarge icon slightly on hover */
}
</style>
