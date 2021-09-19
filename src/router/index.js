import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Category from "../components/Category.vue";
// import Travel from "../components/Travel.vue";
// import Portrait from "../components/Portrait.vue";
// import Fashion from "../components/Fashion.vue";
// import Love from "../components/Love.vue";

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
    path: "/category",
    name: "Category",
    component: Category,
  },
  // {
  //   path: "/portrait",
  //   name: "Portrait",
  //   component: Category,
  // },
  // {
  //   path: "/fashion",
  //   name: "Fashion",
  //   component: Category,
  // },
  // {
  //   path: "/love",
  //   name: "Love",
  //   component: Category,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
