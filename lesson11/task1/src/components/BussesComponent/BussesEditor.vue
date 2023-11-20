<template>
	<div>
		<label>
			License Plate
			<input v-model="bus.licensePlate" type="text">
		</label>
		<label>
			Seats Number
			<input v-model="bus.seats" type="number">
		</label>
		<button @click="onAction">{{actionButtonTitle}}</button>
	</div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
	export default {
		name:'BussesEditor',
		data() {
			return {
				bus: {}
			}
		},
		computed: {
			...mapGetters('busses',['getBusById']),
			receiveBusId(){
				return this.$route.params.busId
			},
			actionButtonTitle() {
				return this.receiveBusId ? 'Save' : 'Create'
			}
		},
		created () {
			if(this.receiveBusId) this.bus = {...this.getBusById(this.receiveBusId)};
		},
		methods: {
			...mapActions('busses', ['addBus', 'updateBus']),

			onAction() {
				if(!this.receiveBusId) this.addBus(this.bus)
				else this.updateBus(this.bus)

				this.$router.push({
					name:'busses'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>

</style>