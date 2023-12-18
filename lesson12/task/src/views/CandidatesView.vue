<template>
	<div class="candidates-manager">
		<CandidateList/>
	</div>
</template>

<script>
import CandidateList from '../components/CandidateComponent/CandidateList'
export default {
		name:'CandidatesView',
		components: {
			CandidateList,
			

		},

	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.candidates-manager {
padding-left: 20px;

}

</style>