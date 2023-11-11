<template>
	<h6>Список товарів:</h6>
	<div v-for="product in getCategoryList" :key="product.id" class="products" @click="onCategoryClick(product.category)" >  {{ product.category }}

	</div>

</template>

<script>
import { mapGetters } from 'vuex'


	export default {

		name: 'ProductsList',

		computed: {
			...mapGetters(['getCategoryList'])
			
		},
		methods: {
			onCategoryClick(category) {
				this.$router.push({
					name:'product',
					params:{
						productCategory:category
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

h6{
	text-align: start;
	font-size: 20px;
}
.products{

	text-align: start;
	padding: 10px;
	cursor: pointer;
	@media (any-hover: hover){
		&:hover{
			color: blue;
		}
	}
}
</style>