import Vue from 'vue'
import Router from 'vue-router'
import HomePageVue from '../components/home/HomePage';
import DashboardPageVue from '../components/dashboard/DashboardPage';
import PublisherPageVue from '../components/publishers/PublisherPage';

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
  mode: 'history',
  routes,
});

export default router;
