<template>
	<div>
		<label>
			New gift
			<input v-model="gift.title" type="text" >
			<v-btn @click="onAdd" class="button">Add</v-btn>
		</label>
	</div>
</template>

<script>
import { mapActions } from 'pinia'
import { useGiftsStore } from '../store/gifts'

	export default {
		name:'GiftsAdder',
		data() {
			return {
				gift: {}
			}
		},
		methods: {
			...mapActions(useGiftsStore,['addItem']),
			onAdd(){
				if(this.gift.title)
				this.addItem(this.gift)
			this.gift = {
				title: ''
			}

			}
		},
	}
</script>

<style lang="scss" scoped>
label{
	font-size: 18px;
	font-weight: bold;
}
</style>