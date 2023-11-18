import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView";
import MyContacts from "../views/MyContacts";
import CompanyEditor from "@/components/CompanyEditor.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //  component: () =>
   //    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
	path: "/contacts",
	name: "contacts",
	component: MyContacts,
 },
 {
	path: "/company/:companyId?",
	name: "company",
	component: CompanyEditor,
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
