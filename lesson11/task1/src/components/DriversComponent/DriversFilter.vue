<template>
	<div class="filter-cnt">
		<h1>Filter</h1>
		<div>
			<label>
				Name
				<input v-model.lazy="filterObj.name" type="text" >
			</label>
		</div>
		<div>
			<label>
				Experience:
				from
				<input v-model.lazy="filterObj.experienceFrom"  type="number" >
				to
				<input v-model.lazy="filterObj.experienceTo"  type="number" >
			</label>
		</div>
		<button @click="onReset">Reset</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		name:'DriversFilter',
		data() {
			return {
				filterObj: {}
			}
		},
		watch: {
			filterObj:{
				handler(newValue) {
				this.updateFilter(newValue)
				},
				deep:true,
			}
		},
		methods: {
			...mapActions('drivers', ['updateFilter']),
			onReset(){
				this.filterObj = {}
			}
		},
	}
</script>

<style lang="scss" scoped>
.filter-cnt{
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 30px;
}
</style>