<template>
	<div>
		<assignment-list/>
		<assignment-selection/>
	</div>
</template>

<script>
import AssignmentList from './AssignmentList.vue'
import AssignmentSelection from './AssignmentSelection.vue'
	export default {
		name:'AssignmentManager',
		components: { AssignmentList, AssignmentSelection },

	}
</script>

<style lang="scss" scoped>

</style>