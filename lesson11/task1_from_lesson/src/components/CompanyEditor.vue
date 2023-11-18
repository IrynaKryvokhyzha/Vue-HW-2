<template>
	<div>
		<label>
			Title
			<input v-model.lazy="company.title" type="text" >
		</label>
		<label>
			Tax rate
			<input v-model.lazy="company.taxRate" type="number" >
		</label>
		<label>
			Year
			<input v-model.lazy="company.foundationYear" type="number" >
		</label>
		<label>
			Owner
			<input v-model.lazy="company.owner" type="text" >
		</label>
		<button @click="onAction">{{actionButtonTitle}}</button>
	</div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'

	export default {
		name:'CompanyEditor',
		data() {
			return {
				company: {}
			}
		},
		computed: {
			...mapGetters(['getCompanyById']),
			receivedCompanyId() {
				return this.$route.params.companyId 
			},
			actionButtonTitle(){
				return this.receivedCompanyId ? 'Save' : 'Create'
			},
			},
			created () {
				if(this.receivedCompanyId) this.company = {...this.getCompanyById(this.receivedCompanyId)};
			},
			methods: {
				...mapActions(['addCompany', 'updateCompany']),

				onAction() {
					if(!this.receivedCompanyId) this.addCompany(this.company)
					else this.updateCompany(this.company)
					this.$router.push({
						name: 'home',
					})
				}
			
		},
	}
</script>

<style lang="scss" scoped>

</style>