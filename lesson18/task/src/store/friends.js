import { defineStore } from 'pinia'
import { usePurposeStore } from './purpose'

export const useFriendsStore = defineStore('friends', {
	state:()=>({
		friendsList:[
			{
				id:1,
				name: 'Dmytro' 
			},
			{ 
				id:2,
				name: 'Olga' 
			},
			{ 
				id:3,
				name: 'Galyna' 
			}
		]
	}),
	getters: {
		getItemById: (state)=>(itemId)=>state.friendsList.find(item=>item.id===itemId),
	},
	actions: {
		deleteItem(itemId){
			this.friendsList = this.friendsList.filter(item=>item.id!==itemId)
			const purpose = usePurposeStore()
			purpose.removePurposeByFriendId(itemId)
		},
		addItem(item){
			this.friendsList.push({
				id: new Date().getTime(),
				...item
			})
		},
	},
})