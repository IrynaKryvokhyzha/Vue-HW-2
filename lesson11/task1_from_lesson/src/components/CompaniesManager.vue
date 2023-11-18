<template>
	<div>
		<companies-filter/>
		<companies-list/>

	</div>
</template>

<script>
import CompaniesFilter from '@/components/CompaniesFilter.vue';
import CompaniesList from '@/components/CompaniesList';

	export default {
    name: 'CompaniesManager',
    components: { CompaniesFilter , CompaniesList}
}
</script>

<style lang="scss" scoped>

</style>