import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsList from "../views/ProductsList.vue";
import ProductPage from "../views/ProductPage.vue";
import PaymentView from "../views/PaymentView.vue";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: HomeView,
  },
  {
	path: "/shop",
	name: "shop",
	component: ProductsList,
 },
 {
	path: "/shop/:productCategory",
	name: "product",
	component: ProductPage,
 },
 {
	path: "/payment",
	name: "payment",
	component: PaymentView,
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