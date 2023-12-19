<template>
	<div class="gift-list">
		<h1>Gifts List</h1>
		<div v-for="gift in giftsList" :key="gift.id" class="gift">
			{{ gift.title }}
			<v-btn @click="deleteItem(gift.id)" class="button-delete">Delete</v-btn>
		</div>
		<div>
			<gifts-adder/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGiftsStore } from '../store/gifts'
import GiftsAdder from './GiftsAdder.vue'
	export default {
		name:'GiftsList',
		components: {
			GiftsAdder,
		},
		computed: {
			...mapState(useGiftsStore,['giftsList'])
		},
		methods: {
			...mapActions(useGiftsStore,['deleteItem'])
		},
	}
</script>

<style lang="scss" >
@import '../assets/style/index.scss';
.gift-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 400px;
}
.gift {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

</style>