<template>
	<div>
		<h3>Add candidate</h3>
		<label>
			Name
			<input v-model="candidate.name" type="text" >
		</label>
		<v-btn class="button" @click="onAdd">Add</v-btn>
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
			...mapActions('candidates', ['addItem']),
			onAdd(){
				if(this.candidate.name)
			this.addItem(this.candidate)
			this.candidate={
				name:''
			}
		}
		},
		
	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

</style>