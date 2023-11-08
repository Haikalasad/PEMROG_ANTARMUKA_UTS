// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/views/Product.vue'; // Replace 'About' with your actual component path

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'produk', // Define the route path for the About page
        name: 'Produk',
        component: ProductPage, // Use the imported About component
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
