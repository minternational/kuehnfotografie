import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/gallery/:id",
    name: "Gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
