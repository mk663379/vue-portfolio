import { ROUTES } from '@/constants'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: ROUTES.features.sampleModals,
      component: () => import('@/views/features/SampleModals.vue'),
    },
    {
      path: ROUTES.plugins.dates,
      component: () => import('@/views/plugins/VueDatePicker.vue'),
    },
    {
      path: ROUTES.plugins.draggable,
      component: () => import('@/views/plugins/VueDraggable.vue'),
    },
  ],
})

export default router
