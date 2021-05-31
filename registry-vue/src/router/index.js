import Vue from 'vue'
import Router from 'vue-router'
import HomePageVue from '../components/home/HomePage';
import DashboardPageVue from '../components/dashboard/DashboardPage';
import PublisherPageVue from '../components/publishers/PublisherPage';
import PublisherDetailVue from '../components/publishers/PublisherDetail'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/overview'},
  { path: '/', 
    component: HomePageVue,
    children: [
      { path: '/overview', name: "overview", component: DashboardPageVue },
      { path: '/publishers', name: "publishers", component: PublisherPageVue },
      { path: '/publisher/:id', name: "publisher", component: PublisherDetailVue },
    ]
  },
  ]

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
