<template>
	<div>
		<div v-if="isLoading">
			<v-progress-circular
			indeterminate
			color="green"
		 ></v-progress-circular>
		</div>
		<div v-else-if="hasError"> Error</div>
		<template v-else>
			<slot></slot>
		</template>
	</div>
</template>

<script>
import { mapGetters} from 'vuex';

	export default {
		name:'MainMasterpage',
		computed: {
		...mapGetters('toDoItems',['isLoading', 'hasError'])
	},
	}
</script>

<style lang="scss" scoped>

</style>