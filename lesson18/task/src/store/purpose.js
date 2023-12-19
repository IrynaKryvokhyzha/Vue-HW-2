import { defineStore } from 'pinia'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'

export const usePurposeStore = defineStore('purpose', {
	state: () => (
		{ 
			purposeList:[
				{
					id: 1,
					friendId: 1,
					giftId: 2
				},
				{
					id: 2,
					friendId: 3,
					giftId: 3
				},
				{
					id: 3,
					friendId: 2,
					giftId: 1
				}
			]
		}),
	getters: {
		getItemById: (state)=>(itemId)=>state.purposeList.find(item=>item.id===itemId),
		getFilledInterviewsList:(state)=>{
			const friends = useFriendsStore()
			const gifts = useGiftsStore()
			if(state.purposeList.length){
				return state.purposeList.map(purpose=>{
					const friend = friends.getItemById(purpose.friendId)
					const gift = gifts.getItemById(purpose.giftId)
					return{
						id:purpose.id,
						friendName: friend.name,
						giftTitle: gift.title

					}
				})
			}
		}
	},
	actions: {
		deleteItem(itemId){
			this.purposeList = this.purposeList.filter(item=>item.id!==itemId)
		},
		addItem(item){
			this.purposeList.push({
				id: new Date().getTime(),
				...item
			})
		},
		removePurposeByFriendId(friendId){
			this.purposeList=this.purposeList.filter(purpose=>purpose.friendId!==friendId)
		},
		removePurposeByGiftId(giftId){
			this.purposeList=this.purposeList.filter(purpose=>purpose.giftId!==giftId)
		},
	},
})