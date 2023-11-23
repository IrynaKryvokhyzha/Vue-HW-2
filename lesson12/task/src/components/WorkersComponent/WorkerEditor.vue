<template>
	<div>
		<label>
			Name
			<input v-model.lazy="worker.name" type="text">
		</label>
		<button @click="onAction">{{actionButtonTitle}}</button>
	</div>
</template>

<script>
import { mapGetters ,mapActions} from 'vuex'
	export default {
		name: 'WorkerEditor',
		data() {
			return {
				worker: {}
			}
		},
		computed: {
			...mapGetters('workers', ['getWorkerById']),
			receivedWorkerId(){
				return this.$route.params.workerId
			},
			actionButtonTitle(){
				return this.receivedWorkerId ? 'Save' : 'Create'
			}
		},
		created () {
			if(this.receivedWorkerId)
			this.worker = {...this.getWorkerById(this.receivedWorkerId)};
		},
		
		methods: {
			...mapActions('workers',['addWorker', 'updateWorker']),
			onAction() {
				if(!this.receivedWorkerId) {
					if(this.worker.name)
					this.addWorker(this.worker)
				}
				else this.updateWorker(this.worker)
				
				this.$router.push({
					name:'workers'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>