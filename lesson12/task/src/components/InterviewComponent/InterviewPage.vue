<template>
	<main-masterpage>
	<div>
		<div class="interview-cnt">
			<div>
				<h3>Workers</h3>
				<select v-model="interviews.workerId">
					<option v-for="worker in getItemsList" :key="worker.id" :value="worker.id" >{{worker.name}}</option>
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
				<v-btn class="button" @click="onAdd" >Add</v-btn>
			</div>
		</div>
		<div>
			<interview-list/>
		</div>
	</div>
</main-masterpage>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import MainMasterpage from '../../masterpages/MainMasterpage.vue';
import InterviewList from './InterviewList.vue';
	export default {
		name: 'InterviewPage',
		components: { InterviewList, MainMasterpage },

		data() {
			return {
				interviews: {},
				
			}
		},

		computed: {
			// ...mapGetters('interviews', ['getItemsList']),
			...mapGetters('candidates', ['getCandidatesList']),
			...mapGetters('workers', ['getItemsList']),
			...mapGetters('weekDays', ['getWeekDays']),

		},
		created () {
			this.loadWeekDaysData();
			this.loadCandidatesList()
			this.loadList()
		},
		methods: {
			...mapActions('weekDays',['loadWeekDaysData']),
			...mapActions('interviews',['addItem', 'loadFilteredData']),
			...mapActions('candidates',['loadCandidatesList']),
			...mapActions('workers',['loadList']),
			onAdd(){
				this.addItem(this.interviews)
				this.interviews={}
		
			}
		},
		
	}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
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