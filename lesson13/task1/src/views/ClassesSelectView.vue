<template>
	<div class="container">
		<div class="title">Choose classes:</div>
		<div v-for="subject in getSubjectList" :key="subject.id" class="item">
			<label>
				{{ subject.title }}
				<input v-model="selectedSubjects" :value="subject.id" type="checkbox">
			</label>
		</div>
		<div>
			<button :disabled="noSelection" @click="onSelect" type="submit" class="button">Choose teachers</button>
		</div>
	</div>
			
</template>

<script>
import { mapGetters } from 'vuex';
export default {
		name: 'ClassesSelectView',

		data() {
			return {
				selectedSubjects: []
			}
		},
		computed: {
			...mapGetters('classes', ['getSubjectList']),
			noSelection(){
				return !this.selectedSubjects.length
			}
		},
		methods: {
			onSelect() {
				this.$router.push({
					name:'teachers-select',
					params:{
						subjectId:this.selectedSubjects
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	flex-direction: column;
	padding: 20px;

}
.title{
text-align: start;
font-size: 20px;
font-weight: 600;
margin-bottom: 15px;
}
.item{
display: flex;


}
button{
	display: block;
	background-color: #42b983;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 20px;
	@media (any-hover: hover){
		&:hover{
			background-color: #70d5a8;
		}
	}

}
</style>