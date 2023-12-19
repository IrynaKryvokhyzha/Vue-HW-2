<template>
	<div>
		<h2>{{title}}</h2>
		<div>
			<div v-for="selection in getSelectedProducts" :key="selection.shopId" >
				<h3>{{getShopById(selection.shopId).title}}</h3>
				<div v-for="prodId in selection.productsIdList" :key="prodId"
				@click="removeProductFromShop({
					shopId:selection.shopId, 
					prodId
				})"
				class="selection"
				>
					{{ getProductById(prodId).title }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

	export default {
		name:'DividedProducts',
		props: {
			title: {
				type: String,
				default: 'Product distribution'
			},
		},
		computed: {
			...mapGetters(['getSelectedProducts', 'getShopById', 'getProductById'])
		},
		methods: {
			...mapActions(['removeProductFromShop'])
		},
	}
</script>

<style lang="scss" scoped>
.selection{
	cursor: pointer;
}
</style>





