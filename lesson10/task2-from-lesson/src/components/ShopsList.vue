<template>
	<div>
		<h1>{{title}}</h1>
		<div class="shop-cnt">
			<div v-for="shop in getShopsList" :key="shop.id"
				class="shop" :class="{'is-selected' : isSelectedShopId(shop.id)}"
				@click="selectShop(shop.id)">
				{{ shop.title }}
			</div>
		</div>
		
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'ShopsList',
		props: {
			title: {
				type: String,
				default: "Shops"
			},
		},
		computed: {
			...mapGetters(
				['getShopsList', 
				'getSelectedShopId', 
				'isSelectedShopId']
				)
		},
		methods: {
			...mapActions(['selectShop'])
		},
		
	}
</script>

<style lang="scss" scoped>
.shop-cnt{
	border: 2px solid black;
	max-width: 300px;
	padding: 10px;
}
.shop{
	padding: 5px;
	cursor: pointer;

}
.is-selected{
	border: 2px solid red;

}
</style>