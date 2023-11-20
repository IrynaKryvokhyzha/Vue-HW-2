<template>
	<div>
		<h1>Our Drivers</h1>
		<drivers-filter/>
		<drivers-list/>
		
	</div>
</template>

<script>
import DriversFilter from '@/components/DriversComponent/DriversFilter.vue'
import DriversList from '@/components/DriversComponent/DriversList/index.vue'
	export default {
		name:'DriversManager',
		components: { DriversList, DriversFilter },
	}
</script>

<style lang="scss" scoped>

</style>