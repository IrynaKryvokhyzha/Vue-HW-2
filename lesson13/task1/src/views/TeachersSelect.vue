<template>
	<div>
		<h1>Choose Teachers</h1>
		<subject-teachers-selector
		v-for="subId in subjectId" :key="subId" :subject-id="subId"
		@teacher-selected="onTeacherSelect(subId,$event)"
		/>
	</div>
	<button @click="onStart">Start Classes</button>
</template>

<script>
import SubjectTeachersSelector from '@/components/SubjectTeachersSelector.vue';

	export default {
    name: 'TeachersSelect',
    components: { SubjectTeachersSelector },
	 data() {
		return {
			lessons: {}
		}
	 },
	 computed: {
		subjectId() {
			return this.$route.params.subjectId
		}
	 },
	 methods: {
		onTeacherSelect(subjectId, teacherId) {
			this.lessons[subjectId]=teacherId
		},
		onStart(){
			const lessonsIdsPairs=[]
			for (const subId in this.lessons) {
				lessonsIdsPairs.push(`${subId}-${this.lessons[subId]}`)
					
				}
			
			this.$router.push({
				name:'study-select',
				params:{
					lessonsIdsPairs
				}
			})
		}
	 },
}
</script>

<style lang="scss" scoped>

</style>