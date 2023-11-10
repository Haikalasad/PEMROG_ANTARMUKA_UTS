// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/views/Product.vue'; // Replace 'About' with your actual component path
import MousePage from '@/views/Product_Mouse.vue';
import KeyboardPage from '@/views/Product_Keyboard.vue';
import HeadphonePage from '@/views/Product_Headphone.vue';
import JoystickPage from '@/views/Product_Joystick.vue';
import home from '@/views/Home.vue'
import search from '@/views/Search.vue'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: 'home', // Define the route path for the About page
        name: 'Home',
        component: home, // Use the imported About component
      },
      {
        path: 'produk', // Define the route path for the About page
        name: 'Produk',
        component: ProductPage, // Use the imported About component
      },
      {
        path: 'produk/mouse', // Define the route path for the About page
        name: 'Mouse',
        component: MousePage, // Use the imported About component
      },
      {
        path: 'produk/keyboard', // Define the route path for the About page
        name: 'Keyboard',
        component: KeyboardPage, // Use the imported About component
      },
      {
        path: 'produk/headphone', // Define the route path for the About page
        name: 'Headphone',
        component: HeadphonePage, // Use the imported About component
      },
      {
        path: 'produk/joystick', // Define the route path for the About page
        name: ' Joystick',
        component: JoystickPage, // Use the imported About component
      },
      {
        path: '/search', // Define the route path for the About page
        name: 'Search',
        component: search, // Use the imported About component
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
