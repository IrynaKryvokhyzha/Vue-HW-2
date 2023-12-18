<template>
	<div class="edit-container">
		<label>
			{{$t("titles.name")}}
			<input v-model.lazy="worker.name" type="text">
		</label>
		<v-btn class="button" @click="onAction" >{{languageTitleChange}}</v-btn>
	</div>
</template>

<script>
import { mapGetters ,mapActions} from 'vuex'
	export default {
		name: 'WorkerEditor',
		data() {
			return {
				worker: {},
			}
		},
		computed: {
			...mapGetters('workers', ['getItemById']),
			receivedWorkerId(){
				return this.$route.params.workerId
			},
			actionButtonTitle(){
				return this.receivedWorkerId ? 'Save' : 'Create'
			},
			languageTitleChange(){
				let t
				if(this.actionButtonTitle === 'Save') t = this.$t('button.save')
				if(this.actionButtonTitle === 'Create') t = this.$t('button.add')
				return t
				
			}
		
		
		},
		created () {
			if(this.receivedWorkerId)
			this.worker = {...this.getItemById(this.receivedWorkerId)};
		},
		
		methods: {
			...mapActions('workers',['addItem', 'updateItem']),
			onAction() {
				if(!this.receivedWorkerId) {
					if(this.worker.name)
					this.addItem(this.worker)
				}
				else this.updateItem({
					itemId: this.worker.id, 
					data:{
						name:this.worker.name
					}
				})
				
				this.$router.push({
					name:'workers'
				})
			}
		},
	}
</script>

<style lang="scss" >
@import '@/assets/style/index.scss';

</style>