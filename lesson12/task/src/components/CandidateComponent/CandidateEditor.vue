<template>
	<div>
		<label>
			Name
			<input v-model="candidate.name" type="text">
		</label>
		<button @click="onSave">Save</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name:'CandidateEditor',
		data() {
			return {
				candidate: {}
			}
		},
		computed: {
			...mapGetters('candidates', ['getCandidateById']),
			receiveCandidateId(){
				return this.$route.params.candidateId
			}
		},
		created () {
			
			this.candidate ={...this.getCandidateById(this.receiveCandidateId)};
		},
		methods: {
			...mapActions('candidates',['updateCandidate']),
			onSave(){
				this.updateCandidate(this.candidate)
				this.$router.push({
					name:'candidates'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>