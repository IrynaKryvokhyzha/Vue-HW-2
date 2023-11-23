<template>
	<div class="interview-cnt">
		<h3> Scheduled interviews:</h3>
		<div class="interview-cnt__title">
			<h4>Worker:</h4>
			<h4>Candidate:</h4>
			<h4>Day:</h4>
		</div>
		<div v-for="interview in getFilledInterviewsList" :key="interview.id" class="interview-cnt__item">
			<div>{{interview.workerName}}</div>
			<div>{{interview.candidateName}}</div>
			<div>{{interview.weekdayTitle}}</div>
			<button @click="removeInterview(interview.id)">Delete</button>
		</div>

	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name:'InterviewList',
		computed: {
			...mapGetters('interviews',['getFilledInterviewsList'])
		},
		methods: {
			...mapActions('interviews',['removeInterview'])
		},
	}
</script>

<style lang="scss" scoped>
.interview-cnt {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


	// .interview-cnt__title

	&__title {
		display: flex;
		width: 500px;
		justify-content: flex-start;
		gap: 70px;
	}

	// .interview-cnt__item

	&__item {
		display: flex;
		justify-content: space-between;
		width: 500px;
		font-size: 16px;
		font-weight: 400;
	}
}


</style>