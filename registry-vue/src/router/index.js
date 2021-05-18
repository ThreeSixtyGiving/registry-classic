import { createWebHistory, createRouter } from "vue-router";
import App from '../App.vue';
import DashboardPageVue from '../components/organisms/DashboardPage';
import PublisherPageVue from '../components/organisms/PublisherPage';

const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/', 
    component: App,
    children: [
      { path: '/dashboard', name: "Dashboard", component: DashboardPageVue },
      { path: '/publishers', name: "Publishers", component: PublisherPageVue },
    ]
  },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
