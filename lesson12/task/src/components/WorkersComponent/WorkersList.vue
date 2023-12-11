<template>
	<main-masterpage >
		<div class="worker-container">
			<h2>Workers:</h2>
			<div v-for="worker in getItemsList" :key="worker.id" class="worker" >
				<span >{{ worker.name }}</span>
				<v-btn class="button" @click="onEdit(worker.id)">Edit</v-btn>
				<v-btn class="button-delete" @click="deleteItem(worker.id)">Delete</v-btn>
			</div>
			<router-link :to="{name: 'workerEditor'}" class="add-button">Add worker</router-link>
		</div>
	</main-masterpage>
</template>

<script>
import { mapGetters , mapActions} from 'vuex';
import MainMasterpage from '@/masterpages/MainMasterpage.vue';

	export default {
		name:'WorkersList',
		components: {
			MainMasterpage	,
		},
		computed: {
			...mapGetters('workers', ['getItemsList'])
		},
		created () {
			this.loadList()
		},
		methods: {
			...mapActions('workers',['deleteItem', 'loadList']),
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
@import '@/assets/style/index.scss';
.worker-container {
max-height: 100%;
}
.worker{
	font-size: 18px;
	padding-bottom: 10px;
}
span{
	padding-right: 50px;
}

.add-button {
	text-decoration: none;
	color:rgb(76, 74, 74);
	border: 2px solid #2c3e50;
	padding: 5px;
	border-radius: 5px;
}
</style>