<template>
	<h1>Companies List</h1>
	<div>
<company-item v-for="company in getFilteredCompaniesList" :key="company.id" :company="company"/>
	</div>
	<router-link :to="{name:'company'}">Create</router-link>
	<!-- або так -->
	<!-- <button @click="onCreate">Create</button> -->
	
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyItem from '@/components/CompaniesList/CompanyItem.vue'

	export default {
		name:'CompaniesList',
		components: { CompanyItem },

		computed: {
			...mapGetters(['getFilteredCompaniesList'])
		},
		methods: {
			onCreate() {
				this.$router.push({
					name: 'company'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>