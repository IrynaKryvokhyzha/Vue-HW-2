import { createStore } from "vuex";
import {shopsList, productsList} from "@/data/shops.js"
export default createStore({
  state(){
	return{
		shopsList:[],
		productsList:[],
		selectedProducts:[
			{
				shopId:2,
				productsIdList:[10,14]
			}
		],
		selectedShopId: null

	}
  },
  getters: {
	getShopById:(state)=>shopId=>state.shopsList.find((shop=>shop.id===shopId)),
	getProductById:(state)=>productId=>state.productsList.find(product=>product.id===productId),
	getSelectedProducts:({selectedProducts})=>selectedProducts,
	getShopsList:({shopsList}) => shopsList,
	getProductsList:({productsList}) => productsList,
	getSelectedShopId:({selectedShopId}) => selectedShopId,
	isSelectedShopId:(state)=>shopId=>shopId===state.selectedShopId,
	getSelectedShopProducts:(state)=>{
		if(!state.selectedShopId) return []
		const selectedShopObj = state.selectedProducts.find((item)=>item.shopId===state.selectedShopId)
		if(selectedShopObj) return selectedShopObj.productsIdList
		return []
	}

  },
  mutations: {
	loadData(state, {shopsList, productsList}){
		state.shopsList = shopsList
		state.productsList = productsList
	},
	selectShop(state, shopId){
		if(state.selectedShopId===shopId) state.selectedShopId=null
		else state.selectedShopId=shopId
	},
	selectProduct(state,{shopId, productId}){
		shopId ??= state.selectedShopId
		if(!shopId) return
		let shopSelectionObg = state.selectedProducts.find((item)=>item.shopId===shopId)
		if(!shopSelectionObg) state.selectedProducts.push(
			{
				shopId,
				productsIdList:[productId]
			}
		)
		else{
			if(shopSelectionObg.productsIdList.includes(productId))
			shopSelectionObg.productsIdList= shopSelectionObg.productsIdList.filter(item=>item!==productId)
			else shopSelectionObg.productsIdList.push(productId)
		}
	}
  },
  actions: {
	loadData({commit}){
		commit('loadData',{shopsList, productsList})
	},
	selectShop({commit}, shopId){
		commit('selectShop', shopId)
	},
	selectProduct({commit}, productId){
		commit('selectProduct', {productId})
	}, 
	removeProductFromShop({commit},{shopId,prodId}){
		commit('selectProduct', {shopId, productId: prodId})
	}
  },
  modules: {},
});
