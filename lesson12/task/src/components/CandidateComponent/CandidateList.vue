<template>
	<main-masterpage>
			<div class="candidates-container">
				<h2>{{$t("menu.candidates")}}:</h2>
				<div v-for="candidate in getCandidatesList" :key="candidate.id" class="candidates">
					<div>{{candidate.name}}</div>
					<div>
						<v-btn class="button" @click="onEdit(candidate.id)">{{$t("button.edit")}}</v-btn>
						<v-btn class="button-delete" @click="deleteItem(candidate.id)">{{$t("button.delete")}}</v-btn>
					</div>
					
				</div>
			</div>
			<candidates-adder />
		</main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
import CandidatesAdder from './CandidatesAdder.vue'
import {mapGetters, mapActions} from 'vuex'

	export default {
    name: 'CandidateList',
	 components: {
			MainMasterpage,
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
.candidates-container{
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin-bottom: 25px;
}
.candidates{
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding-bottom: 10px;


}
span{
	padding-right: 50px;
}

</style>