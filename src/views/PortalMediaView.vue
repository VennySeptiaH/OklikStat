<script setup>
import PortalMedia from '../components/PortalMedia/PortalMedia.vue'
</script>

<template>
  <div class="bg-wrapper bg-gray-200 dark:bg-[#1F2855]">
    <div class="bg z-10"></div>
    <div class="content z-20 dark:text-white">
      <PortalMedia />
    </div>
  </div>
</template>

<style scoped>
.bg-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/bg2.png') no-repeat top center;
  background-size: cover; /* Adjust background size */
  z-index: 10; /* Lower z-index for background */
}

.content {
  position: relative;
  z-index: 20; /* Higher z-index for content */
}
</style>
