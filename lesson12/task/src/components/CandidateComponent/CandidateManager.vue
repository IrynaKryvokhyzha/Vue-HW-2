<template>
	<div class="candidates-manager">
		<candidate-list/>
		<candidates-adder />
	</div>
</template>

<script>
import CandidateList from './CandidateList.vue'
import CandidatesAdder from './CandidatesAdder.vue'

	export default {
		name:'CandidateManager',
		components: {
			CandidateList,
			CandidatesAdder
		},

	}
</script>

<style lang="scss" scoped>
.candidates-manager {
	display: flex;
	justify-content: center;
	gap: 100px;
}

</style>