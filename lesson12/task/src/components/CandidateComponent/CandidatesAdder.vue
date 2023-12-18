<template>
	<div>
		<h3>{{ $t("titles.addCandidate") }}</h3>
		<label>
			{{ $t("titles.name") }}
			<input v-model="candidate.name" type="text" >
		</label>
		<v-btn class="button" @click="onAdd">{{$t("button.add")}}</v-btn>
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
h3{
	margin-bottom: 15px;
}
</style>