<template>
	<div>
		<h1>Filter</h1>
		<div>
			<label>
				Title
				<input v-model.lazy="filterObj.title" type="text" >
			</label>
			<label>
				Tax rate
				<input v-model.lazy="filterObj.taxRate" type="number" >
			</label>
			<label>
				Year
				<input v-model.lazy="filterObj.foundationYear" type="number" >
			</label>
			<label>
				Owner
				<input v-model.lazy="filterObj.owner" type="text" >
			</label>
			<button @click="onReset">Reset</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		name:'CompaniesFilter',
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
				deep: true,
			},
		},
		methods: {
			...mapActions(
				['updateFilter']
			),
			onReset(){
				this.filterObj = {}
			}
		},
		
	}
</script>

<style lang="scss" scoped>

</style>