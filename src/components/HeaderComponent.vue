<template>
  <div>
    <!-- Navbar -->
    <div
      class="navbar bg-white/90 backdrop-blur-lg border border-gray-200 rounded-lg my-3 mx-auto shadow-md fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style="max-width: 1200px; width: 100%;"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <img src="@/assets/oklikstat.png" alt="Logo" class="h-12" />
        <img src="@/assets/logogaris.png" alt="Logo Baru" class="h-12 ml-2 hidden lg:block" />
      </div>

      <!-- Menu (desktop) -->
      <div class="hidden lg:flex space-x-8">
        <a href="/" class="text-gray-700 hover:text-blue-600">Tentang</a>
        <a href="/" class="text-gray-700 hover:text-blue-600">Layanan</a>
        <a href="/" class="text-gray-700 hover:text-blue-600">Bantuan</a>
      </div>

      <!-- WhatsApp Button (desktop) -->
      <a
        href="https://wa.me/6285259173487"
        target="_blank"
        class="btn bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 hover:text-white"
      >
        <i class="fab fa-whatsapp text-green-500 text-xl"></i>
        <span class="text-black">CHAT ADMIN</span>
      </a>

      <!-- Hamburger Menu Button (mobile) -->
      <div class="lg:hidden">
        <button class="btn btn-square btn-ghost" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 top-16">
      <div class="absolute left-0 right-0 bg-white shadow-lg">
        <ul class="menu p-4 space-y-4">
          <li><a href="/" class="text-gray-700">Tentang</a></li>
          <li><a href="/" class="text-gray-700">Layanan</a></li>
          <li><a href="/" class="text-gray-700">Bantuan</a></li>
        </ul>
        <a
          href="https://wa.me/6285259173487"
          target="_blank"
          class="block text-center bg-green-500 text-white py-2 mt-4"
        >
          CHAT ADMIN
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

.btn {
  background-color: #fff;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
}

.btn:hover {
  background-color: #d9fadf;
}

.fab.fa-whatsapp {
  color: #25D366; /* WhatsApp green color */
  font-size: 1.5rem;
}

/* Media query to hide the second logo on small screens */
@media (max-width: 768px) {
  .navbar img:nth-child(2) {
    display: none;
  }
}
</style>
