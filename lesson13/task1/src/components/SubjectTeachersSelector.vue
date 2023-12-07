<template>
	<div>
		<label>
			{{ subjectTitle }}
			<select v-model="selectedTeacher" @change="onChange">
				<option v-for="teacher in teachersList" :key="teacher.id" :value="teacher.id">{{teacher.name}}</option>
			</select>
		</label>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		name:'SubjectTeachersSelector',
		props: {
			subjectId: {
				type: [Number,String],
				required:true 
			},
		},
		data() {
			return {
				selectedTeacher: null
			}
		},
		computed: {
			...mapGetters('classes',['getSubjectById']),
			...mapGetters('teachers',['getTeachersBySubjectId']),

			subjectTitle(){
				return this.getSubjectById(parseInt(this.subjectId))?.title
			},
			teachersList(){
				return this.getTeachersBySubjectId(parseInt(this.subjectId))
			}
		},
		methods: {
			onChange() {
				this.$emit('teacher-selected', this.selectedTeacher)
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>