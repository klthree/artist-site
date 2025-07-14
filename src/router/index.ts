import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:category',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Art',
      },
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About',
      },
    }
  ],
})

router.beforeEach((to, from, next) => {
  // Set the document title based on the route's meta title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'April'; // Fallback title
  }
  next();
});

export default router
