import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import AddAlbum from '@/components/AddAlbum.vue'
import AlbumList from '@/components/AlbumList.vue'
import Album from '@/components/Album.vue'
import AlbumSong from '@/components/AlbumSong.vue'
import AddSong from '@/components/AddSong.vue'
import Song from '@/components/Song.vue'
const routes =  [
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/EditTutorial.vue"),
    props: true
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./views/AddTutorial.vue")
  },
  {
    path: "/view",
    name: "view",
    component: () => import("./views/ViewTutorial.vue"),
    props: true
  },
  {
    path: "/addLesson",
    name: "addLesson",
    component: () => import("./views/AddLesson.vue"),
    props: true
  },
  {
    path: "/editLesson",
    name: "editLesson",
    component: () => import("./views/EditLesson.vue"),
    props: true
  },
  {
    path: '/',
    name: 'root',
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add/:id',
    name: 'add',
    component: AddAlbum
  }, {
    path: '/albums',
    name: 'albums',
    component: AlbumList
  },
  {
    path: '/albums/:id',
    name: 'album-details',
    component: Album
  },
  {
    path: '/songs/:id',
    name: 'album-specific-song-details',
    component: AlbumSong
  },
  {
    path: '/addsong/:id',
    name: 'album-add-song',
    component: AddSong
  },
  {
    path: '/viewsong/:id',
    name: 'song-details',
    component: Song
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;