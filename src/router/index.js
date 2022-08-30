import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由动态加载
const headerMenu = () => import(/* webpackChunkName: "group-head" */ '../components/headers/headerMenu')

const Home = () => import(/* webpackChunkName: "group-head" */ '../views/home/Home.vue')

const MyMusic = () => import(/* webpackChunkName: "group-music" */ '../views/home/MyMusic.vue')

const Singer = () => import(/* webpackChunkName: "group-music" */ '../views/home/Singer.vue')

const SingList = () => import(/* webpackChunkName: "group-music" */ '../views/home/SingList.vue')

const MvDet = () => import(/* webpackChunkName: "group-det" */ '../components/mv/MvDet.vue')

const newSongInfo = () => import(/* webpackChunkName: "group-info" */ '../views/homeChildren/newSongInfo.vue')

const SingListDet = () => import(/* webpackChunkName: "group-det" */ '../views/singListChildren/SingListDet.vue')

const SingerDet = () => import(/* webpackChunkName: "group-det" */ '../components/singer/SingerDet.vue')

const SongDet = () => import(/* webpackChunkName: "group-det" */ '../components/song/songDet/SongDet.vue')

const ToLogin = () => import(/* webpackChunkName: "group-head" */ '../views/ToLogin.vue')

const Rank = () => import(/* webpackChunkName: "group-info" */ '../views/home/Rank.vue')

const SearchResult = () => import(/* webpackChunkName: "group-search" */ '../components/headers/serach/SearchResult.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/home',
  },
  {
    path: '/home', component: headerMenu,
    children: [
      { path: '/home', component: Home,},
      { path: '/newSongInfo', component: newSongInfo },
      { path: '/mymusic', component: MyMusic, },
      { path: '/singer', component: Singer},
      { path: '/singlist', component: SingList, },
      { path: '/singlist/detail', component: SingListDet },
      { path: '/singer/detail', component: SingerDet },
      { path: '/songs/detail', component: SongDet },
      { path: '/login', component: ToLogin },
      { path: '/mvdet', component: MvDet },
      { path: '/rank', component: Rank },
      { path: '/search/result', component: SearchResult }
    ],
  },
]

const router = new VueRouter({
  routes
})

// 未登陆验证 阻止跳转到我的音乐
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/mymusic' && window.sessionStorage.getItem('profile') === null) {
    next('/login')
  }
  next()
})

export default router
