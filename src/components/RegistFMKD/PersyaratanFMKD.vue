<template>
  <div class="min-h-screen flex flex-col items-center p-4">
    <h1 class="text-3xl font-bold mt-10 text-[#404040] text-center md:text-left dark:text-white">
      Persyaratan
    </h1>
    <p class="mt-2 mb-9 text-[#333333] text-center md:text-left dark:text-white">
      Persyaratan dan formulir pendaftaran Forum Mahasiswa Kedinasan Indonesia
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div class="card w-full max-w-sm shadow-xl relative overflow-visible cursor-pointer">
        <a href="daftarfmkd">
          <figure class="m-0 relative">
            <img src="@/assets/FMKI1.jpg" alt="FMKI" class="rounded-t-xl" />
          </figure>
          <div
            class="card-body items-center text-center z-10 relative dark:bg-black dark:rounded-b-lg"
          >
            <p class="text-white font-bold text-base">FMKD Terdaftar</p>
          </div>
        </a>
      </div>

      <div class="card w-full max-w-sm shadow-xl relative overflow-visible cursor-pointer">
        <a
          href="https://drive.google.com/file/d/1e3Krlb0kqVawTOU6Mz04zFFHJfwP8gPu/view?usp=drive_link"
        >
          <figure class="m-0 relative">
            <img src="@/assets/FMKI1.jpg" alt="FMKI" class="rounded-t-xl" />
          </figure>
          <div
            class="card-body items-center text-center z-10 relative dark:bg-black dark:rounded-b-lg"
          >
            <p class="text-white font-bold text-base">Syarat Registrasi</p>
          </div>
        </a>
      </div>

      <div class="card w-full max-w-sm shadow-xl relative overflow-visible cursor-pointer">
        <a
          href="https://drive.google.com/file/d/1wWDhR6v_IVaDp64WoXAB_EJ8E0chIfmI/view?usp=drive_link"
        >
          <figure class="m-0 relative">
            <img src="@/assets/FMKI1.jpg" alt="FMKI" class="rounded-t-xl" />
          </figure>
          <div
            class="card-body items-center text-center z-10 relative dark:bg-black dark:rounded-b-lg"
          >
            <p class="text-white font-bold text-base">Formulir Registrasi</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.card {
  background-color: #0093ad;
  transition: transform 0.3s;
  width: 100%;
  max-width: 300px;
  margin: auto;
}
.card:hover {
  transform: scale(1.04);
}
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
</style>
