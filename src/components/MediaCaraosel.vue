<template>
  <div class="carousel w-full">
    <div v-for="(item, index) in items" :key="index" class="carousel-item relative w-full">
      <img :src="item.image" class="w-full" />
      <div class="absolute bottom-0 left-0 bg-opacity-50 bg-black text-white p-4">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <button class="btn btn-primary mt-2">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'path/to/image1.jpg',
          title: 'RAKERNAS FMKI 2022',
          description: 'Description for item 1'
        },
        {
          image: 'path/to/image2.jpg',
          title: 'Peninjauan Vaksinasi Covid-19 BEM PKN STAN',
          description: 'Description for item 2'
        },
        {
          image: 'path/to/image3.jpg',
          title: 'Semarak Festival Seni Nasional (FSN) 2022',
          description: 'Description for item 3'
        },
        {
          image: 'path/to/image4.jpg',
          title: 'Rapat Koordinasi SIPENCATAR',
          description: 'Description for item 4'
        }
      ]
    }
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length
    },
    prev() {
      this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length
    }
  }
}
</script>

<style scoped>
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
</style>
