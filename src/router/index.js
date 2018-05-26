import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from "../components/common/Header.vue";
import Aside from "../components/common/Aside.vue";
import Login from "../components/login/Login.vue";
import Homepage from "../components/Aside-page/Homepage.vue";

Vue.use(Router);

let adminChildren=[
  { path: '/Homepage',name:'Homepage',component: Homepage }
];

export default new Router({
  routes: 
  [
      { path: '/', redirect: "/homepage", component: HelloWorld },
    {path: '/',name: 'HelloWorld',component: HelloWorld,children:adminChildren},
    { path: '/login',name:"Login",component: Login },
]
})
