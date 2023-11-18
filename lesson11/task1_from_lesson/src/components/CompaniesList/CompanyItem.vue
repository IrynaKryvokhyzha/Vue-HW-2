<template>
	<div class="company-item">
<div v-for="val in company" :key="val.id">
{{ val }}
</div>
<button @click="onEdit">Edit</button>
<button @click="removeCompany(company.id)">Delete</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		name:'CompanyItem',
		props: {
			company: {
				type: Object,
				required: true 
			},
		},
		
		methods: {
			...mapActions(['removeCompany']),
			onEdit(){
				this.$router.push({
					name: 'company',
					params:{
						companyId: this.company.id
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.company-item{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 500px;
	padding-bottom: 10px;
}
</style>