<template>
	<div class="container">
		<h1>Assignments</h1>
		<div class="item-title">
			<span>Driver</span>
			<span>License Plate</span>
		</div>
		<div v-for="assignment in getFilledAssignmentsList" :key="assignment.id" class="assignment">
			<span>{{ assignment.driverName }}</span>
			<span>{{ assignment.busNumber}}</span>
			
			<button @click="removeAssignment(assignment.id)">Delete</button>
		</div>

	</div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

	export default {
		name:'AssignmentList',
		computed: {
			...mapGetters('assignment', ['getFilledAssignmentsList'])
		},
		methods: {
			...mapActions('assignment',['removeAssignment'])
		},
	}
</script>

<style lang="scss" scoped>
.container {
	width: 300px;
}
.item-title {
	display: flex;
gap: 20px;
	margin-bottom: 10px;
	font-size: 18px;
}
.assignment {
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
}
</style>