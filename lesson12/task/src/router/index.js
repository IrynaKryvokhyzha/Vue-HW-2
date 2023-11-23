import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import WorkersView from "../views/WorkersView.vue";
// import WorkerEditor from "@/components/WorkersComponent/WorkerEditor.vue";
// import CandidatesView from "../views/CandidatesView.vue";
// import CandidateEditor from "@/components/CandidateComponent/CandidateEditor.vue";
// import InterviewView from "../views/InterviewView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
   //  component: WorkersView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "workers" */ "../views/WorkersView.vue"),
  },
  {
	path: "/workerEditor/:workerId?",
	name: "workerEditor",
	component: () =>
	import(/* webpackChunkName: "workerEditor" */ "@/components/WorkersComponent/WorkerEditor.vue"),
 },
  {
	path: "/candidates",
	name: "candidates",
	component: () =>
	import(/* webpackChunkName: "candidates" */ "../views/CandidatesView.vue"),
 },
 {
	path: "/candidateEditor/:candidateId",
	name: "candidateEditor",
	component: () =>
	import(/* webpackChunkName: "candidateEditor" */ "@/components/CandidateComponent/CandidateEditor.vue"),
 },
 {
	path: "/interview",
	name: "interview",
	component: () =>
	import(/* webpackChunkName: "interview" */ "../views/InterviewView.vue"),
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
