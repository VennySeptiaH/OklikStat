<template>
  <div class="flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-2xl font-bold mb-4 text-custom">Monitor Mockup Example</h1>
    <div class="mockup-monitor border border-gray-300 bg-white shadow-lg">
      <div class="flex justify-center items-center h-full bg-gray-100">
        <div class="content bg-white p-4">
          <p class="text-center">Your content here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitorMockup'
}
</script>

<style scoped>
.mockup-monitor {
  width: 800px; /* Adjust the size as needed */
  height: 450px; /* Adjust the size as needed */
  border-radius: 12px; /* Rounded corners */
  position: relative;
  overflow: hidden;
}

.mockup-monitor:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 120%;
  height: 50px;
  background: #333;
  border-bottom: 4px solid #222;
  transform: translateX(-50%);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.mockup-monitor:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -25px;
  left: 50%;
  width: 160px;
  height: 50px;
  background: #333;
  border-radius: 8px;
  transform: translateX(-50%);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
