import { defineStore } from 'pinia'
import { usePurposeStore } from './purpose'

export const useGiftsStore = defineStore('gifts', {
	state: () => (
		{ 
			giftsList:[
				{
					id: 1,
					title: 'Cake'
				},
				{
					id: 2,
					title: 'Gift Card'
				},
				{
					id: 3,
					title: 'Socks'
				}
			]
		}),
	getters: {
		getItemById: (state)=>(itemId)=>state.giftsList.find(item=>item.id===itemId),
	},
	actions: {
		deleteItem(itemId){
			this.giftsList = this.giftsList.filter(item=>item.id!==itemId)
			const purpose = usePurposeStore()
			purpose.removePurposeByGiftId(itemId)
		},
		addItem(item){
			this.giftsList.push({
				id: new Date().getTime(),
				...item
			})
		},
	},
})