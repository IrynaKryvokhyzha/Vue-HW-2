<template>
	<div class="drivers-list-cnt">
		<div class="item-title">
			<h3>Name</h3>
			<h3>Experience</h3>
		</div>
		<drivers-item 
		v-for="driver in getFilteredDriversList" :key="driver.id"
		:driver="driver"
	/>
	</div>
	<router-link :to="{name:'driver'}" class="router-link">Add driver</router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import DriversItem from './DriversItem.vue'

	export default {
		name: 'DriversList',
		components: { DriversItem },
		computed: {
			...mapGetters('drivers',['getFilteredDriversList'])
		},
		
	}
</script>

<style lang="scss" scoped>
.item-title {
	display: flex;
	gap: 40px;
	width: 300px;
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