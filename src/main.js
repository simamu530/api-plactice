import Vue from 'vue'
import VueRouter from 'vue-router';
// import App from './App.vue'
import router from './router'
import Home from './views/Home.vue'

Vue.use(VueRouter); //VueでRouterという昨日を使うというコマンド？

const routes = [
  {
    path: "./views",
    name: "Home",
    component: Home,
  }
];


  console.log(routes)

// const router = new VueRouter({
//   mode: "history",
//   base: ProcessingInstruction.env.Base_URL,
//   routes,
// }); //ここのコマンドはどういう意味があるのか

export default router;
