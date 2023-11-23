<template>
	<div class="worker-container">
		<h2>Workers:</h2>
		<div v-for="worker in getWorkersList" :key="worker.id" class="worker">
			<span >{{ worker.name }}</span>
			<button @click="onEdit(worker.id)">Edit</button>
			<button @click="removeWorker(worker.id)">Delete</button>
		</div>
		<router-link :to="{name: 'workerEditor'}" class="add-button">Add worker</router-link>
	</div>
	
</template>

<script>
import { mapGetters , mapActions} from 'vuex';

	export default {
		name:'WorkersList',
		computed: {
			...mapGetters('workers', ['getWorkersList'])
		},
		methods: {
			...mapActions('workers',['removeWorker']),
			onEdit(workersId){
				this.$router.push({
					name:'workerEditor',
					params:{
						workerId: workersId
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.worker-container {

}


.worker{
	font-size: 18px;
	padding-bottom: 10px;
}
span{
	padding-right: 50px;
}

.add-button{
	text-decoration: none;
	color:rgb(76, 74, 74);
	border: 2px solid #42b983;
	padding: 3px;
	@media (any-hover: hover){
		&:hover{
			background-color: #42b983;

		}
	}
}
</style>