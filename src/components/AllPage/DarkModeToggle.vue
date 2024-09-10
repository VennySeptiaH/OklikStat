<template>
  <div class="fixed bottom-4 right-4 z-30">
    <!-- Floating button for Kritik & Saran with highest z-index -->
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfK2EyphffVh5v3bEgxne9-b99tETg3sTowj6TI6TugLOlTYQ/viewform"
      target="_blank"
      class="w-16 h-16 p-4 rounded-full bg-green-500 text-white text-2xl shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl flex items-center justify-center"
    >
      <i class="fas fa-comment-dots"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FloatingButton',
}
</script>

<style scoped>
/* Styles for the floating button */
button, a {
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}
button:hover, a:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}
</style>
