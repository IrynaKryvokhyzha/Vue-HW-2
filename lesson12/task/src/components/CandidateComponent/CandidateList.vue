<template>
	<candidates-masterpage>
			<div>
				<h2>Candidates:</h2>
				<div v-for="candidate in getCandidatesList" :key="candidate.id" class="candidates">
					<span>{{candidate.name}}</span>
					<v-btn class="button" @click="onEdit(candidate.id)">Edit</v-btn>
					<v-btn class="button-delete" @click="deleteItem(candidate.id)">Delete</v-btn>
				</div>
			</div>
			<candidates-adder />
		</candidates-masterpage>
</template>

<script>
import CandidatesMasterpage from '@/masterpages/CandidatesMasterpage.vue'
import CandidatesAdder from './CandidatesAdder.vue'
import {mapGetters, mapActions} from 'vuex'

	export default {
    name: 'CandidateList',
	 components: {
			CandidatesMasterpage,
			CandidatesAdder,
		},
    computed: {
        ...mapGetters('candidates', ['getCandidatesList'])
    },
	 created () {
		this.loadCandidatesList()
	 },
    methods: {
        ...mapActions('candidates', ['loadCandidatesList', 'deleteItem', 'updateItem']),
        onEdit(candidateId) {
            this.$router.push({
                name: 'candidateEditor',
                params: {
                    candidateId: candidateId
                }
            });
        }
    },
   
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
.candidates{
	font-size: 18px;
	padding-bottom: 10px;
	text-align: center;
  
}
span{
	padding-right: 50px;
}

</style>