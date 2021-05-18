import Vue from 'vue'
import Router from 'vue-router'
import HomePageVue from '../components/organisms/HomePage';
import DashboardPageVue from '../components/organisms/DashboardPage';
import PublisherPageVue from '../components/organisms/PublisherPage';

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/', 
    component: HomePageVue,
    children: [
      { path: '/dashboard', name: "Dashboard", component: DashboardPageVue },
      { path: '/publishers', name: "Publishers", component: PublisherPageVue },
    ]
  },
  ]

const router = new Router({
  routes,
});

export default router;
