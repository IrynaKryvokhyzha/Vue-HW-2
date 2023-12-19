<template>
	<div class="friends-list">
		<h1>Friends list</h1>
		<div v-for="friend in friendsList"
		:key="friend.id" class="friend">{{ friend.name }}
		<v-btn @click="deleteItem(friend.id)" class="button-delete">Delete</v-btn>
		</div>
		<div>
			<friend-adder/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useFriendsStore } from '../store/friends'
import FriendAdder from './FriendAdder.vue'

	export default {
		name: 'FriendsList',
		components: { FriendAdder },

		computed: {
			...mapState(useFriendsStore,['friendsList'])
		},
		methods: {
			...mapActions(useFriendsStore,['deleteItem'])
		},
	}
</script>

<style lang="scss">
@import '../assets/style/index.scss';
.friends-list{
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 450px;
}
.friend{
	display: flex;
	justify-content: space-between;
	gap: 20px;
}
</style>