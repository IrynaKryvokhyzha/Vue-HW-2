<template>
	<div>
		<div class="interview-cnt">
			<div>
				<h3>Workers</h3>
				<select v-model="interviews.workerId">
					<option v-for="worker in getWorkersList" :key="worker.id" :value="worker.id" >{{worker.name}}</option>
				</select>
			</div>
			<div>
				<h3>Candidates</h3>
				<select v-model="interviews.candidateId">
					<option v-for="candidate in getCandidatesList" :key="candidate.id" :value="candidate.id" >{{candidate.name}}</option>
				</select>
			</div>
			<div>
				<h3>Day</h3>
				<select v-model="interviews.weekdayId">
					<option v-for="day in getWeekDays" :key="day.id" :value="day.id" >{{day.title}}</option>
				</select>
			</div>
			<div class="button">
				<button @click="onAdd">Add</button>
			</div>
		</div>
		<div>
			<interview-list/>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InterviewList from './InterviewList.vue';
	export default {
		name: 'InterviewPage',
		data() {
			return {
				interviews: {},
				
			}
		},
		components: { InterviewList },

		computed: {
			...mapGetters('interviews', ['getInterviewsList']),
			...mapGetters('workers', ['getWorkersList']),
			...mapGetters('candidates', ['getCandidatesList']),
			...mapGetters('weekDays', ['getWeekDays'])
		},
		methods: {
			...mapActions('weekDays',['loadWeekDaysData']),
			...mapActions('interviews',['addInterview']),
			onAdd(){
			
					this.addInterview(this.interviews)
					this.interviews={}
		
			}
		},
		created () {
			this.loadWeekDaysData();
			
		},
	}
</script>

<style lang="scss" scoped>
.interview-cnt{
	display: flex;
	justify-content: center;
	gap: 10px;
	padding: 30px;

}
.button{
	align-self: flex-end;

}
</style>