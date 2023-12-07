import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
	 meta: {requiresAuth:false},
  },
  {
    path: "/classes",
    name: "classes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "classes" */ "../views/ClassesView.vue"),
		meta: {requiresAuth:true},
		children:[
			{
				path: "select",
				name: "classes-select",
				component:() =>
				import(/* webpackChunkName: "select" */ "../views/ClassesSelectView.vue"),
				meta: {requiresAuth:true},
			},
			{
				path: ":subjectId(\\d+)+",
				name: "teachers-select",
				component:() =>
				import(/* webpackChunkName: "select" */ "../views/TeachersSelect.vue"),
				meta: {requiresAuth:true},
			},
			{
				path: ":lessonsIdsPairs(\\d+-\\d+)+",
				name: "study-select",
				component:() =>
				import(/* webpackChunkName: "select" */ "../views/LessonsPlan.vue"),
				props:true,
				meta: {requiresAuth:true},
				beforeEnter(to, from){
					if(from.name!=="teachers-select")
					return {
						name: "pagenotfound"
					}
					if(!to.params.lessonsIdsPairs?.length)
					return{
						name:"classes-select"
					}
				},
			},
		],
  },
  {
	path: "/teachers",
	name: "teachers",
	component: () =>
	  import(/* webpackChunkName: "teachers" */ "../views/TeachersView.vue"),
	  meta: {requiresAuth:true},
 },
 {
	path: "/:pathMatch(.*)*",
	name: "pagenotfound",
	component: () =>
	  import(/* webpackChunkName: "pagenotfound" */ "../views/PageNotFound.vue"),
	  meta: {requiresAuth:false},
 },
 {
	path: "/login",
	name: "login",
	component: () =>
	  import(/* webpackChunkName: "login" */ "../views/LoginPage.vue"),
	  meta: {requiresAuth:false},
 },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to)=>{
	const authParams = localStorage.getItem('authParams')
	if(to.meta.requiresAuth && !authParams) 
	return {
		name: 'login'
	}
}

)

export default router;
