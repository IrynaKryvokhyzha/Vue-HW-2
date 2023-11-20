import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriversView from "../views/DriversView.vue";
import BussesView from "../views/BussesView.vue";
import AssignmentView from "../views/AssignmentView.vue";
import ContactsView from "../views/ContactsView.vue";
import DriversEditor from "@/components/DriversComponent/DriversEditor.vue";
import BussesEditor from "@/components/BussesComponent/BussesEditor.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //  component: () =>
   //    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
	path: "/driver/:driverId?",
	name: "driver",
	component: DriversEditor,
 },
  {
	path: "/busses",
	name: "busses",
	component: BussesView,
 },
 {
	path: "/busEditor/:busId?",
	name: "busEditor",
	component: BussesEditor,
 },
 {
	path: "/assignment",
	name: "assignment",
	component: AssignmentView,
 },
 {
	path: "/contacts",
	name: "contacts",
	component: ContactsView,
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
