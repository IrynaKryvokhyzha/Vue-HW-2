import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkersView from "../views/WorkersView.vue";
import WorkerEditor from "@/components/WorkersComponent/WorkerEditor.vue";
import CandidatesView from "../views/CandidatesView.vue";
import CandidateEditor from "@/components/CandidateComponent/CandidateEditor.vue";
import InterviewView from "../views/InterviewView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //  component: () =>
   //    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
	path: "/workerEditor/:workerId?",
	name: "workerEditor",
	component: WorkerEditor,
 },
  {
	path: "/candidates",
	name: "candidates",
	component: CandidatesView,
 },
 {
	path: "/candidateEditor/:candidateId",
	name: "candidateEditor",
	component: CandidateEditor,
 },
 {
	path: "/interview",
	name: "interview",
	component: InterviewView,
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
