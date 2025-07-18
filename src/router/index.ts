import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:category',
      name: '',
      component: HomeView,
      meta: {
        title: 'April Brust',
      },
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About April',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/home'
    }
  ],
})

router.beforeEach((to, from, next) => {
  // Set the document title based on the route's meta title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'April Brust'; // Fallback title
  }
  next();
});

export default router
