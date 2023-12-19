<template>
	<div>
		<div class="purpose-container">
			<div>
				<h3>Friend</h3>
				<select v-model="purpose.friendId">
					<option v-for="friend in friendsList" :key="friend.id" :value="friend.id" >{{friend.name}}</option>
				</select>
			</div>
			<div>
				<h3>Gift</h3>
				<select v-model="purpose.giftId">
					<option v-for="gift in giftsList" :key="gift.id" :value="gift.id" >{{gift.title}}</option>
				</select>
			</div>
			<div class="button">
				<v-btn @click="onAdd" class="button">Add</v-btn>
			</div>
		</div>
		<div>
			<purpose-list/>
		</div>
	</div>
	
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePurposeStore } from '@/store/purpose'
import { useFriendsStore } from '../store/friends'
import { useGiftsStore } from '../store/gifts'
import PurposeList from './PurposeList.vue'

	export default {
		name:'GiftsPurpose',
		components: { PurposeList },

		data() {
			return {
				purpose: {}
			}
		},
		computed: {
			...mapState(useFriendsStore,['friendsList']),
			...mapState(useGiftsStore,['giftsList'])
		},
		methods: {
			...mapActions(usePurposeStore, ['addItem']),
			onAdd() {
				if(this.purpose.friendId && this.purpose.giftId)
				this.addItem(this.purpose)
				this.purpose={}
			}
		},
	}
</script>

<style lang="scss" scoped>
@import '../assets/style/index.scss';
.purpose-container{
	display: flex;
	justify-content: space-between;
	gap: 20px;
	margin-bottom: 50px;
	max-width: 400px;
}
.button{
	align-self: end;
}
</style>