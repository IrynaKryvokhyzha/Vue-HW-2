<template>
	<div>
		<div>{{ subjectTitle }} - {{ teacherName }}</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		name:'LessonsPairPreview',
		props: {
			lessonPair: {
				type: String,
				required: true
			},
		},
		computed: {
			...mapGetters('classes',['getSubjectById']),
			...mapGetters('teachers',['getTeacherById']),
			subjectId() {
				return this.lessonPair.split('-')[0]
			},
			subjectTitle(){
				return this.getSubjectById(parseInt(this.subjectId))?.title
			},
			teacherId() {
				return this.lessonPair.split('-')[1]
			},
			teacherName(){
				return this.getTeacherById(parseInt(this.teacherId))?.name
			}
		},
		
	}
</script>

<style lang="scss" scoped>

</style>