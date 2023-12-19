<template>
	<div>
		<h1>{{title}}</h1>
		<div class="products-cnt">
			<div v-for="product in getProductsList" :key="product.id" 
			class="product" 
			:class="{
				'is-selected': isSelected(product.id)
				}"
				@click="selectProduct(product.id)"
			>
				{{ product.title }}
			</div>
		</div>
		
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

	export default {
		name:'ProductsList',
		props: {
			title: {
				type: String,
				default: 'Products List'
			},
		},
		computed: {
			...mapGetters(['getProductsList', 'getSelectedShopProducts'])
		},
		methods: {
			...mapActions(['selectProduct']),
			isSelected(productId) {
				return this.getSelectedShopProducts.includes(productId)
			}
		},
	}
</script>

<style lang="scss" scoped>
.products-cnt {
	border: 2px solid black;
	max-width: 300px;
	padding: 10px;
}
.product{
	padding: 5px;
	cursor: pointer;
}
.is-selected{
	border: 2px solid red;
}
</style>