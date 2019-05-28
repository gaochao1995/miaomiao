import Vue from 'vue'
import Router from 'vue-router'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import movieRouter from './movie'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    mineRouter,
    cinemaRouter,
    movieRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ],
})
