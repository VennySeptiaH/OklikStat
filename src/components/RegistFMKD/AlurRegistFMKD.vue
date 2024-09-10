<template>
  <div class="min-h-screen flex flex-col items-center">
    <!-- Breadcrumb -->
    <div class="max-w-xs text-sm breadcrumbs ml-20 self-start dark:text-white">
      <ul>
        <li class="text-[#0093AD]"><a>Beranda </a></li>
        <li class="text-[#0093AD]"><a>Layanan Publik </a></li>
        <li class="text-gray-600 dark:text-white"><a>Registrasi</a></li>
      </ul>
    </div>

    <!-- Header -->
    <div class="text-center mt-0">
      <h1 class="text-4xl font-bold text-[#333333] dark:text-white">
        REGISTRASI <span class="text-cyan-600">FMKD</span>
      </h1>

      <div class="flex justify-center mt-2 mb-4">
        <div class="h-1 w-16 bg-cyan-600"></div>
        <div class="h-1 w-4 bg-cyan-400"></div>
        <div class="h-1 w-4 bg-cyan-600"></div>
      </div>
      <p class="text-[#7F8C8D] max-w-[58vw] text-[18px] dark:text-white">
        Portal Pendaftaran Forum Mahasiswa Kedinasan Daerah Indonesia
      </p>
    </div>

    <!-- Container -->
    <div class="container mt-10 mb-20 p-4">
      <h2 class="text-3xl font-bold mb-4 text-[#333333] dark:text-white">Alur Registrasi</h2>
      <p class="mb-6 text-[#333333] dark:text-white">
        Berikut 3 langkah yang harus dilalui ketika melakukan regristrasi, berikut alurnya:
      </p>

      <ul class="steps steps-vertical">
        <li class="step step-neutral mb-3 dark:step">
          <div class="flex items-start">
            <div class="ml-4 flex items-center">
              <img
                src="@/assets/alur1.png"
                alt="alur1"
                class="px-1.5 dark:bg-white dark:rounded-md dark:px-1.5"
              />
              <h3 class="text-[#333333] ml-6 text-left dark:text-white">
                Mengisi formulir pendaftaran.
              </h3>
            </div>
          </div>
        </li>
        <li class="step step-neutral mb-3 dark:step">
          <div class="flex items-start">
            <div class="ml-4 flex items-center">
              <img src="@/assets/alur2.png" alt="alur2" class="dark:bg-white dark:rounded-md" />
              <h3 class="text-[#333333] ml-4 text-left dark:text-white">
                Meminta tanda tangan Komandan Resimen, Ketua BEM, atau Ketua Senat.
              </h3>
            </div>
          </div>
        </li>
        <li class="step step-neutral mb-3 dark:step">
          <div class="flex items-start">
            <div class="ml-4 flex items-center">
              <img src="@/assets/alur3.png" alt="alur3" class="dark:bg-white dark:rounded-md" />
              <h3 class="text-[#333333] ml-4 text-left dark:text-white">
                Scan formulir & kirimkan ke FMKI dalam bentuk digital.
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationFlow'
}
</script>

<style scoped>
.container {
  max-width: 65vw;
}
.steps-vertical {
  position: relative;
}
.step {
  position: relative;
  padding-left: 3vw; /* Adjust to accommodate step circles */
}
.step-primary .step::before {
  content: '';
  position: absolute;
  top: 0;
  border-radius: 50%;
  background-color: #4fd1d9;
}
.step::before {
  /* background-color: #4FD1D9 !important; */
  color: white !important;
}

/* Responsive typography */
h1 {
  font-size: 3vw; /* Responsive font size */
}
h2 {
  font-size: 2.7vw; /* Responsive font size */
}
h3 {
  font-size: 1.3vw; /* Responsive font size */
}
p {
  font-size: 1.4vw; /* Responsive font size */
}

/* Media Queries for smaller devices */
@media (max-width: 768px) {
  h1 {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }
  h2 {
    font-size: 4.5vw;
  }
  h3 {
    font-size: 2.3vw; /* Adjust font size for smaller screens */
  }
  p {
    font-size: 2.5vw; /* Adjust font size for smaller screens */
  }
  .container {
    max-width: 85vw; /* Adjust container width for smaller screens */
  }
  .step {
    padding-left: 5vw; /* Adjust padding for smaller screens */
  }
  .btn-custom {
    left: -3vw;
    width: 20vw;
    height: 7vh;
    font-size: 3vw;
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
