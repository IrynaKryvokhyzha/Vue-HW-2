<template>
	<div>
<interview-page/>
	</div>
</template>

<script>
import InterviewPage from '../components/InterviewComponent/InterviewPage.vue';
	export default {
		name:'InterviewView',
		components: { InterviewPage },

	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
</style>