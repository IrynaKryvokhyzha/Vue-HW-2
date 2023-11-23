<template>
	<div >
		<h2>Candidates:</h2>
		<div v-for="candidate in getCandidatesList" :key="candidate.id" class="candidates">
			<span>{{candidate.name}}</span>
			<button @click="onEdit(candidate.id)">Edit</button>
			<button @click="removeCandidate(candidate.id)">Delete</button>
		</div>
	

	</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

	export default {
		name:'CandidateList',
	
		computed: {
			...mapGetters('candidates',['getCandidatesList'])
		},
		methods: {
			...mapActions('candidates',['removeCandidate']),
			onEdit(candidateId){
				this.$router.push({
					name:'candidateEditor',
					params:{
						candidateId: candidateId
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.candidates{
	font-size: 18px;
	padding-bottom: 10px;
	text-align: center;
  
}
span{
	padding-right: 50px;
}
</style>