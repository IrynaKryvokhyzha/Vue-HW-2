<template>
	<div>
		<div class="container">
			<div class="item-title">
				<span>License Plate</span>
				<span>Seats Number</span>
			</div>
			<div v-for="bus in getBussesList" :key="bus.id" class="bus">
				<span>{{ bus.licensePlate }}</span>
				<span> {{ bus.seats}}</span>
				<div>
					<button @click="onEdit(bus.id)">Edit</button>
					<button @click="removeBus(bus.id)">Delete</button>
				</div>
			</div>
			<router-link :to="{name:'busEditor'}" class="router-link" >Add Bus</router-link>
		</div>

	</div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'

	export default {
		name: 'BussesList',
		computed: {
			...mapGetters('busses', ['getBussesList'])
		},
		methods: {
			...mapActions('busses', ['removeBus']),
			onEdit(busId){
				this.$router.push({
					name: 'busEditor',
					params:{
						busId: busId
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.container {
	width: 400px;
}
.item-title {
	display: flex;
	gap: 30px;
	margin-bottom: 10px;
	font-size: 18px;
}
.bus {
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
}
.router-link{
	border: 2px solid black;
	text-decoration: none;
	padding: 5px;
	color: black;
	@media (any-hover: hover){
		&:hover{
			background-color: rgb(217, 225, 231);
		}
	}
}
</style>