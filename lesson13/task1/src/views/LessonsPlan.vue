<template>
	<h2>Classes</h2>
	<div>
		<lessons-pair-preview v-for="lessonPairIds in lessonsIdsPairs" 
		:key="lessonPairIds" :lesson-pair="lessonPairIds"/>
	</div>
</template>

<script>
import LessonsPairPreview from '../components/LessonsPairPreview.vue'
	export default {
		name:'LessonsPlan',
		components: { LessonsPairPreview },
		props: {
			lessonsIdsPairs: {
				type: Array,
				default: ()=>[]
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>