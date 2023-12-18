<template>
	<div>
		<label>
			{{ $t("titles.name") }}
			<input v-model="candidate.name" type="text">
		</label>
		<v-btn class="button" @click="onSave">{{$t("button.save")}}</v-btn>
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
			...mapGetters('candidates', ['getCandidatesId']),
			receiveCandidateId(){
				return this.$route.params.candidateId
			},
			
		},
		created () {
			
			this.candidate ={...this.getCandidatesId(this.receiveCandidateId)};
		},
		methods: {
			...mapActions('candidates',['updateItem']),

			onSave(){
				this.updateItem({
					itemId: this.candidate.id,
					data:{
						name: this.candidate.name
					}
				})
				this.$router.push({
					name:'candidates'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
</style>