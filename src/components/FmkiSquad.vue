<template>
  <div class="flex flex-col justify-center items-center pt-4 pb-100 frame">
    <div class="carousel w-full /md:w-1/2 pb-0">
      <div
        v-for="(image, index) in images"
        :key="index"
        v-show="currentSlide === index"
        class="carousel-item relative w-full"
      >
        <img :src="image" class="w-full rounded-lg" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <button @click="prevSlide" class="btn btn-circle">❮</button>
          <button @click="nextSlide" class="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fmki1 from '@/assets/FMKI1.jpg'
import fmki2 from '@/assets/FMKI2.jpg'
import fmki3 from '@/assets/FMKI3.jpg'
export default {
  name: 'CarouselComponent',
  data() {
    return {
      currentSlide: 0,
      images: [fmki1, fmki2, fmki3]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.frame {
  margin-bottom: 0;
}
.carousel {
  max-width: 1000px;
}
.carousel-item {
  margin-bottom: 0;
}
.carousel img {
  object-fit: cover;
  border-radius: 0.75rem;
}
.frame {
  margin-bottom: 0;
}
.carousel-item {
  margin-bottom: -10;
}
@media (max-width: 1018px) {
  .carousel {
    max-width: 500px;
  }
  .btn {
    font-size: 0.75rem; /* Ukuran font yang lebih kecil untuk tombol */
    padding: 0.5rem; /* Padding yang lebih kecil untuk tombol */
  }
}
@media (max-width: 768px) {
  .carousel {
    max-width: 400px;
  }
}
</style>
