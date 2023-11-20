<template>
	<div class="driver-container">
		<div>{{driver.name}}</div>
		<div>{{driver.experience}}</div>
		<div>
			<button @click="onEdit">Edit</button>
			<button @click="removeDriver(driver.id)">Delete</button>
		</div>
	</div>
	
</template>

<script>
import { mapGetters , mapActions} from 'vuex'

	export default {
		name:'DriversItem',
		props: {
			driver: {
				type: Object,
				required: true
			},
		},
		computed: {
			...mapGetters('drivers', ['getDriversList'])
		},
		methods: {
			...mapActions('drivers', ['removeDriver']),
			onEdit() {
				this.$router.push({
					name:'driver',
					params:{
						driverId: this.driver.id
					}
				})
			},
			
		},
	}
</script>

<style lang="scss" scoped>
.driver-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 300px;
	padding-bottom: 10px;;
}

</style>
