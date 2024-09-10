<script setup>
import { ref, onMounted } from 'vue';
import FmkiSquad from '../components/FmkiSquad.vue';
import KedinasanCaraousel from '../components/KedinasanCaraousel.vue';
import AboutUs from '../components/AboutUs.vue';
import Catalogue from '../components/CatalogueNews.vue';
import MediaPartner from '../components/MediaPartner.vue';

// Define the letters and colors for "OklikStat"
const oklikStatLetters = [
  { char: 'O', color: 'text-blue-500' },
  { char: 'k', color: 'text-orange-500' },
  { char: 'l', color: 'text-green-500' },
  { char: 'i', color: 'text-blue-500' },
  { char: 'k', color: 'text-orange-500' },
  { char: 'S', color: 'text-green-500' },
  { char: 't', color: 'text-blue-500' },
  { char: 'a', color: 'text-orange-500' },
  { char: 't', color: 'text-green-500' }
];

// Reactive array to control when each letter becomes visible
const visibleLetters = ref([]);

// Function to simulate the typing effect
const startTypingEffect = () => {
  let index = 0;
  visibleLetters.value = []; // Reset letters
  
  const interval = setInterval(() => {
    if (index < oklikStatLetters.length) {
      visibleLetters.value.push(oklikStatLetters[index]);
      index++;
    } else {
      clearInterval(interval); // Stop when all letters are shown
      // Restart typing effect after a delay
      setTimeout(() => {
        startTypingEffect(); // Recursive call to restart the animation
      }, 2000); // 2-second pause before restarting
    }
  }, 200); // Adjust the speed (200ms delay between each letter)
};

onMounted(() => {
  startTypingEffect(); // Start the typing effect on mount
});
</script>

<template class="scroll-smooth">
  
  <div class="background-wrapper">
    <div class="background"></div>
    <div class="content">
      <!-- Halo PST Section -->
      <div class="halo-section text-center text-white py-20">
        <h1 class="text-5xl font-bold mb-2">
          Selamat Datang di 
          <!-- Typing Animation for OklikStat -->
          <span v-for="(letter, index) in visibleLetters" 
                :key="index"
                :class="letter.color"
                class="inline-block animate-typing">
            {{ letter.char }}
          </span>!
        </h1>

        <p class="text-xl mb-4">
          One Klik Statistik (OklikStat) adalah web yang dibuat agar pengguna data ​mendapatkan layanan data<br>
          dengan mudah dan cepat dari BPS Kabupaten Blitar<br>
          <b>Tenang! Sekarang ada One Klik Statistik<br></b>
          <em>Bingung Nyarinya, Tinggal Klik Solusinya &nbsp;<i class="fas fa-mouse-pointer"></i></em>
        </p>
        
          <div class="search-container mx-auto max-w-lg relative">
            <input
              type="text"
              placeholder="Cari data statistik..."
              class="w-full p-4 pl-6 pr-12 rounded-full shadow-lg focus:outline-none text-black"
            />
            <button class="absolute right-0 top-0 bottom-0 flex items-center justify-center w-12 text-white bg-green-500 rounded-full mr-2">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

      <!-- Spacing and About Us Section -->
      <br />
      <KedinasanCaraousel />
      <AboutUs />
      <br />
    </div>
  </div>
</template>
<style scoped>
/* Typing Animation */
@keyframes typing {
  from {
    opacity: 0;
    transform: translateY(10px); /* Start from below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* End at its original position */
  }
}

.search-container {
  max-width: 600px;
  position: relative;
}

input {
  border: none;
  padding-left: 1.5rem;
  padding-right: 3rem; /* Space for the search icon */
  width: 100%;
  border-radius: 30px;
  height: 48px; /* Ensure consistent height */
}

button {
  position: absolute;
  right: 10px; /* Adjust based on your padding */
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  background-color: #48bb78;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #38a169;
}

button i {
  font-size: 16px;
}
.animate-typing {
  animation: typing 0.5s forwards; /* Apply the animation */
  opacity: 0; /* Initially hidden */
}

/* Rest of the styles */
.halo-section {
  background-size: cover;
  background-position: center;
}

.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg_bps.png');
  background-size: contain; /* Ubah ini ke 'contain' untuk mencegah gambar di-zoom */
  background-size: cover; /* Atur agar background menutupi seluruh area elemen tanpa distorsi */

  background-repeat: no-repeat; /* Gambar tidak diulang */
  background-attachment: fixed; /* Membuat background tetap saat scrolling */
}

.dark {
  background-color: black;
}

.content {
  position: relative;
  z-index: 2;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

input {
  border: none;
  padding: 1rem;
  padding-left: 1.5rem;
  border-radius: 30px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  border: none;
  padding: 1rem;
  border-radius: 30px;
  background-color: #48bb78;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #38a169;
}

@media (max-width: 1503px) {
  .background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/bg_bps.png') no-repeat top center;
    background-size: 200%;
    z-index: 1;
  }
}

@media (max-width: 1096px) {
  .background::before {
    content: '';
    position: absolute;
    top: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/bg_bps.png') no-repeat top center;
    background-size: 300%;
    z-index: 1;
  }
}

@media (max-width: 500px) {
  .background::before {
    content: '';
    position: absolute;
    top: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/bg_bps.png') no-repeat top center;
    background-size: 350%;
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .background::before {
    background-size: 150%; /* Untuk layar kecil, bisa menyesuaikan ukuran */
    background-position: top center; /* Menyusun ulang gambar untuk layar kecil */
  }
}

@media (min-width: 1024px) {
  .background::before {
    background-size: 100%; /* Ukuran normal untuk layar besar */
    background-position: center center; /* Memastikan gambar berada di tengah */
  }
}

</style>
