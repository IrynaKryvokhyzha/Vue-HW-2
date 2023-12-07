<template>
	<main-masterpage>
		<div>

		</div>
		<router-view/>
	</main-masterpage>
</template>

<script>

import MainMasterpage from '@/masterpages/MainMasterpage.vue'
	export default {
		name: 'ClassesView',
		components: {
			MainMasterpage,
		},

	}
</script>

<style lang="scss" scoped>

</style>
