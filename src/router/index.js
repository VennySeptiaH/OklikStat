import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BerandaView.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('../views/RegistView.vue')
    },
    {
      path: '/registfmki',
      name: 'registfmki',
      component: () => import('../views/RegistFMKIView.vue')
    },
    {
      path: '/registfmkd',
      name: 'registfmkd',
      component: () => import('../views/RegistFMKDView.vue')
    },
    {
      path: '/daftarptk',
      name: 'daftarptk',
      component: () => import('../views/DaftarPTKView.vue')
    },
    {
      path: '/daftarfmkd',
      name: 'daftarfmkd',
      component: () => import('../views/DaftarFMKDView.vue')
    },
    {
      path: '/PressRelease',
      name: 'PressRelease',
      component: () => import('../views/PressRelease.vue')
    },
    {
      path: '/KajianStrategis',
      name: 'KajianStrategis',
      component: () => import('../views/KajianStrategis.vue')
    },
    {
      path: '/BacaSelengkapnya/:id',
      name: 'BacaSelengkapnya',
      component: () => import('../views/BacaSelengkapnya.vue')
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/SejarahFMKI',
      name: 'SejarahFMKI',
      component: () => import('../views/Sejarah.vue')
    },
    {
      path: '/kepengurusan',
      name: 'kepengurusan',
      component: () => import('../views/KepengurusanView.vue')
    },
    {
      path: '/tataaturan',
      name: 'portalmedia',
      component: () => import('../views/PortalMediaView.vue')
    },
    {
      path: '/halofmki',
      name: 'halo',
      component: () => import('../views/HaloFMKIView.vue')
    },
    {
      path: '/danafmki',
      name: 'danafmki',
      component: () => import('../views/KeuanganView.vue')
    }
  ]
})
export default router
