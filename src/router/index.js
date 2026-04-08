import { createRouter, createWebHistory } from 'vue-router'

// Single-page portfolio — one route, sections use hash anchors
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      // App.vue is mounted directly, no route component needed
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
