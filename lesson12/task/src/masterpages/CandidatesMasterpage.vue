<template>
	<div>
		<div v-if="isLoading">
			<v-progress-circular indeterminate color="green"
		></v-progress-circular>
		</div>
		<div v-else-if="hasError"> Error</div>
		<template v-else>
			<slot></slot>
		</template>
		<footer>
			2023
		</footer>
	</div>
</template>

<script>
import { mapGetters} from 'vuex';
	export default {
		name: 'CandidatesMasterpage',
		computed: {
			...mapGetters('candidates',['isLoading', 'hasError']),

		},
	}
</script>

<style lang="scss" scoped>


footer{
	position: fixed;
	bottom: 15px;
	align-self: center;
}
</style>
