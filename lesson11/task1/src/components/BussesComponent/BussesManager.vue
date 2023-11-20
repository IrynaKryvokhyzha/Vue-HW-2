<template>
	<div>
		<h1>Our Busses</h1>
<busses-list/>

	</div>
</template>

<script>
import BussesList from './BussesList.vue'
	export default {
		name:'BussesManager',
		components: { BussesList },

	}
</script>

<style lang="scss" scoped>

</style>