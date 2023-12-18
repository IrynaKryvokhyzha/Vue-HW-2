<template>
	<main-masterpage >
		<div class="worker-container">
			<h2 class="title">{{$t("menu.workers")}}:</h2>
			<div v-for="worker in getItemsList" :key="worker.id" class="worker" >
				<div>{{ worker.name }}</div>
				<div>
					<v-btn class="button" @click="onEdit(worker.id)">{{$t("button.edit")}}</v-btn>
					<v-btn class="button-delete" @click="deleteItem(worker.id)">{{$t("button.delete")}}</v-btn>
				</div>
			</div>
			<div>
				<v-btn class="button" @click="onAdd">{{$t("button.addWorker")}}</v-btn>
			</div>
			
			<!-- <router-link :to="{name: 'workerEditor'}" class="add-button">{{$t("button.addWorker")}}</router-link> -->
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
			...mapGetters('workers', ['getItemsList']),
			
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
			},
			onAdd(){
				this.$router.push({
					name:'workerEditor',
					
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.worker-container {
display: flex;
flex-direction: column;
padding-left: 20px;
max-width: 600px;
}
.title{
	margin-bottom: 10px;
}
.worker{
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
}
span{
	padding-right: 50px;
}


</style>