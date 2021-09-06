import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Travel from "../components/Travel.vue";
import Portrait from "../components/Portrait.vue";
import Fashion from "../components/Fashion.vue";
import Love from "../components/Love.vue";

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
    path: "/travel",
    name: "Travel",
    component: Travel,
  },
  {
    path: "/portrait",
    name: "Portrait",
    component: Portrait,
  },
  {
    path: "/fashion",
    name: "Fashion",
    component: Fashion,
  },
  {
    path: "/love",
    name: "Love",
    component: Love,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
