<script setup>
import PressRelease from '../components/PressRelease.vue'
</script>

<template>
  <div class="bg-wrapper bg-gray-100 p-6 dark:bg-[#1F2855]">
    <div class="bg"></div>
    <div class="content">
      <PressRelease />
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
  top: 100;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/bg2.png') no-repeat top center;
  background-size: 100%; /* Adjust background size */
  z-index: 10; /* Lower z-index for background */
}

.content {
  position: relative;
  z-index: 20; /* Higher z-index for content */
}
</style>
