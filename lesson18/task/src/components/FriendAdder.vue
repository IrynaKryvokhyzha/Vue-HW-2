<template>
	<div>
		<label>
			New friend
			<input v-model="friend.name" type="text">
			<v-btn @click="onAdd" class="button">Add</v-btn>
		</label>
	</div>
</template>

<script>
import { mapActions } from 'pinia'
import { useFriendsStore } from '../store/friends'


	export default {
		name: 'FriendAdder',
		data() {
			return {
				friend: {}
			}
		},
		methods: {
			...mapActions(useFriendsStore,['addItem']),
			onAdd(){
				if(this.friend.name)
				this.addItem(this.friend)
				this.friend = {
					name: ''
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
@import '../assets/style/index.scss';
label{
	font-size: 18px;
	font-weight: bold;
}
</style>