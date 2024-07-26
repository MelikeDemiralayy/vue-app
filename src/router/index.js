import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import DetPage from "../pages/DetPage.vue";
import Favorite from "../pages/Favorite.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    name: "DetailCard",
    component: DetPage,
  },
  {
    path: "/favorites",
    name: "Favorite",
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
