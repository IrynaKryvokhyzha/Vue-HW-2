<template>
	<div class="purpose-list">
		<h3>Gift  Purpose:</h3>
		<div v-for="purpose in getFilledInterviewsList" :key="purpose.id" class="purpose">
			<div>{{ purpose.friendName }}</div>
			<div>{{ purpose.giftTitle }}</div>
			<div>
				<v-btn @click="deleteItem(purpose.id)" class="button-delete">Delete</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePurposeStore } from '../store/purpose'

	export default {
		name:'PurposeList',
		computed: {
			...mapState(usePurposeStore,['purposeList','getFilledInterviewsList'])
		},
		methods: {
			...mapActions(usePurposeStore,['deleteItem'])
		},
	}
</script>

<style lang="scss" >
@import '../assets/style/index.scss';

.purpose-list{
	display: flex;
	flex-direction: column;
	max-width: 400px;
	gap: 10px;
}
.purpose{
	display: flex;
	justify-content: space-between;
	gap: 30px;
}

</style>