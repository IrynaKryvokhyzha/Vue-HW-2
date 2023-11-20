<template>
	<div class="driver-editor">
		<div>
			<label>
				Name
				<input v-model.lazy="driver.name" type="text" >
			</label>
		</div>
		<div>
			<label>
				Experience:
				<input v-model.lazy="driver.experience"  type="number" >
			</label>
		</div>
		<button @click="onAction">{{actionButtonTitle}}</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

	export default {
		name:'DriversEditor',
		data() {
			return {
				driver: {}
			}
		},
		computed: {
			...mapGetters('drivers',['getDriverById']),
			receiveDriverId(){
				return this.$route.params.driverId
			},
			actionButtonTitle() {
				return this.receiveDriverId ? 'Save' : 'Create'
			}
		},
		created () {
			if(this.receiveDriverId)
			this.driver = {...this.getDriverById(this.receiveDriverId)}
		},
		methods: {
			...mapActions('drivers', ['addDriver', 'updateDriver']),
			onAction() {
				if(!this.receiveDriverId)
				this.addDriver(this.driver)
				else this.updateDriver(this.driver)
				this.$router.push(
					{
						name:'drivers'
					}
				)
				
				
			}
		},
	}
</script>

<style lang="scss" scoped>
.driver-editor {
	display: flex;
	gap: 20px;
}

</style>