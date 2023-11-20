<template>
	<div>
		<h1>{{title}}</h1>
		<span> Drivers list:</span>
		<select v-model="assignment.driverId" class="driver-select">
			<option v-for="driver in getDriversList"
				:key="driver.id" :value="driver.id" >
				{{driver.name}}
			</option>
		</select>
		<span> License plate:</span>
		<select v-model="assignment.busId" class="bus-select">
			<option v-for="bus in getBussesList"
				:key="bus.id" :value="bus.id" >
				{{bus.licensePlate}}
			</option>
		</select>
		<div>
			<button @click="onAdd">Add</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
	export default {
		name:'AssignmentSelection',
		data() {
			return {
				assignment: {}
			}
		},
		props: {
			title: {
				type: String,
				default: 'New Assignment'
			},
			
		},
		computed: {
			...mapGetters('drivers', ['getDriversList']),
			...mapGetters('busses', ['getBussesList']),
		},
		methods: {
			...mapActions('assignment',['addAssignment']),
			onAdd(){
				this.addAssignment(this.assignment)
				this.assignment={}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
button{
	margin: 10px;
}

</style>