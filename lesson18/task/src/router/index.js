import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "friends" */ "../views/FriendsView.vue"),
  },
  {
	path: "/gifts",
	name: "gifts",
	component: () =>
	  import(/* webpackChunkName: "gifts" */ "../views/GiftsView.vue"),
 },
 {
	path: "/gifts-purpose",
	name: "gifts-purpose",
	component: () =>
	  import(/* webpackChunkName: "gifts-purpose" */ "../views/PurposeView.vue"),
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
