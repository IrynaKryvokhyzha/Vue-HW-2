<template>
	<div class="interview-cont">
		<h3> {{$t("titles.scheduledInterviews")}}:</h3>
		<div class="interview-cont__title">
			<h4>{{$t("menu.workers")}}:</h4>
			<h4>{{$t("menu.candidates")}}:</h4>
			<h4>{{$t("weekdays")}}:</h4>
		</div>
		<div v-for="interview in getFilledInterviewsList" :key="interview.id" class="interview-cont__item">
			<div>{{interview.workerName}}</div>
			<div>{{interview.candidateName}}</div>
			<div>{{interview.weekdayTitle}}</div>
			<v-btn class="button-delete" @click="deleteItem(interview.id)" >{{$t("button.delete")}}</v-btn>
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
		created () {
			return this.loadList()
		},
		methods: {
			...mapActions('interviews',['deleteItem', 'loadList'])
		},
	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.interview-cont {
padding-left: 20px;

	// .interview-cont__title

	&__title {
		display: flex;
		width: 500px;
		justify-content: flex-start;
		
		gap: 60px;
	}
	// .interview-cont__item

	&__item {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		width: 500px;
		align-items: center;
		font-size: 16px;
		font-weight: 400;
		padding-bottom: 10px;
	}
}
h3{
	padding-bottom: 10px;

}


</style>