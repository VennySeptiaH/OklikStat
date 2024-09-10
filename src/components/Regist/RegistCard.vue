<template>
  <div class="bg-white min-h-screen flex flex-col items-center">
    <!-- Breadcrumb -->
    <div class="max-w-xs text-sm breadcrumbs bg-white-100 p-4 ml-20 self-start">
      <ul>
        <li class="text-[#0093AD]"><a>Beranda </a></li>
        <li class="text-[#0093AD]"><a>Layanan Publik</a></li>
        <li class="text-gray-600"><a>Registrasi</a></li>
      </ul>
    </div>
    
    <!-- Header -->
    <div class="text-center mt-0">
      <h1 class="text-4xl font-bold text-[#333333]">
        REGISTRASI <span class="text-cyan-600">FMKI</span>
      </h1>

      <div class="flex justify-center mt-2 mb-4">
        <div class="h-1 w-16 bg-cyan-600"></div>
        <div class="h-1 w-4 bg-cyan-400"></div>
        <div class="h-1 w-4 bg-cyan-600"></div>
      </div>
      <p class="text-[#7F8C8D] max-w-[60vw] text-[18px]">Portal pendaftaran Perguruan Tinggi Kedinasan dan Forum Mahasiswa Kedinasan Daerah</p>
    </div>

    <!-- Card Container -->
    <div class="center-container flex flex-wrap justify-center space-x-0 md:space-x-16 mt-16 mb-20">
      <div class="card w-[80vw] md:w-[38vw] bg-primary shadow-xl relative overflow-visible mb-8 md:mb-0">
        <figure class="m-0 relative">
          <img src="@/assets/FMKI1.jpg" alt="FMKI" class="rounded-t-xl" />
        </figure>

        <button class="btn btn-custom absolute top-[47%] transform -translate-y-1/2 z-20">FMKI</button>

        <div class="card-body items-center text-center z-10 relative">
          <p class="text-white text-base">Forum Mahasiswa Kedinasan Indonesia merupakan wadah bersama bagi Perguruan Tinggi Kedinasan (PTK) dibawah Kementerian maupun lembaga non-kementerian selain Kementerian Riset Teknologi dan Pendidikan Tinggi serta Kementerian Agama untuk berkolaborasi dan berkontribusi bagi kemajuan bersama. Sehingga Kami membuka ruang bagi PTK untuk bergabung bersama FMKI</p>
        </div>
      </div>

      <div class="card w-[80vw] md:w-[38vw] bg-primary shadow-xl relative overflow-visible">
        <figure class="m-0 relative">
          <img src="@/assets/FMKI2.jpg" alt="Shoes" class="rounded-t-xl" />
        </figure>

        <button class="btn btn-custom absolute top-[47%] transform -translate-y-1/2 z-20">FMKD</button>

        <div class="card-body items-center text-center z-10 relative">
          <p class="text-white text-base">Forum Mahasiswa Kedinasan Indonesia tidak hanya terdiri dari Perguruan Tinggi Kedinasan saja, namun didalamnya terdapat Forum Mahasiswa Kedinasan Daerah (FMKD) yang berfokus pada pengembangan mahasiswa/taruna kedinasan di daerah. Sehingga kami membuka kesempatan bagi Forum Mahasiswa Kedinasan Daerah untuk bergabung dan bergerak bersama untuk kemajuan mahasiswa kedinasan di Indonesia.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem; /* Adding margin-bottom for spacing between cards on small screens */
}
.bg-primary {
  background-color: #0093AD;
}
.btn-custom {
  left: -1.5vw;
  width: 15vw;
  height: 9vh;
  background-color: #ffffff;
  border: 1px solid #0093AD;
  opacity: 0.9;
  z-index: 20;
  position: absolute;
  color: #0093AD;
  font-size: larger;
  box-shadow: 6px 7px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.08); /* Tambahkan bayangan yang sesuai */
}

.btn-custom:hover{
  box-shadow: 9px 11px 9px rgba(0, 0 , 0 , 0.3);
}

/* Responsive typography */
h1 {
  font-size: 3vw; /* Responsive font size */
}
h3 {
  font-size: 2vw; /* Responsive font size */
}
p {
  font-size: 1.4vw; /* Responsive font size */
}

/* Media Queries for smaller devices */
@media (max-width: 768px) {
  h1 {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }
  h3 {
    font-size: 3vw; /* Adjust font size for smaller screens */
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
