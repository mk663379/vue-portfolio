import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/plugins/dates',
      component: () => import('@/views/plugins/VueDatePicker.vue'),
    },
  ],
})

export default router
