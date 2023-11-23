<template>
	<div>
		<h3>Add candidate</h3>
		<label>
			Name
			<input v-model="candidate.name" type="text" >
		</label>
		<button @click="onAdd">Add</button>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
	export default {
		name:'CandidatesAdder',
		data() {
			return {
				candidate: {}
			}
		},
	
		
		methods: {
			...mapActions('candidates', ['addCandidate']),
			onAdd(){
				if(this.candidate.name)
			this.addCandidate(this.candidate)
			this.candidate={
				name:''
			}
		}
		},
		
	}
</script>

<style lang="scss" scoped>

</style>