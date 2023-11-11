<template>
	<div v-for="product in currentCategory" :key="product.id" class="container">
		<a :href="product.link" class="link">
				<div class="image">
					<img :src="product.imgSrc" alt="image">
				</div>
				<div class="content">
					<h3 class="title">{{product.category}}</h3>
					<div class="price">{{product.price}} ₴</div>
				</div>
		</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';


	export default {
		name: 'ProductPage',

		data() {
			return {
				currentCategory: []
			}
		},
		computed: {
			...mapGetters(['getProductsByCategory']),
			productCategory(){
				return this.$route.params.productCategory
			}
		},
		created () {
			this.currentCategory=this.getProductsByCategory(this.productCategory);
		},
		
	}
</script>

<style lang="scss" scoped>
/* Однулення стилів */
*,
*::before,
*::after{
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
}
li{
	list-style: none;
}
a {
	color: inherit;
	text-decoration: none;
}
img{
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6{
	font-weight: inherit;
	font-size: inherit;
}
input,
button,
textarea{
	font-family: inherit;
	font-size: inherit;
}
button{
	cursor: pointer;
	color: inherit;
	background-color: inherit;
}
html,
body{
	height: 100%;
}
body{
	line-height: 1;
}

.container {
	max-width: 400px;
	padding: 10px;
	

}
.link {
	display: flex;
	flex-direction: row;
	gap: 20px;

}
.image {
	flex: 0 1 50%;
	img{
		max-width: 100%;
	}
}
.content {
	flex: 0 1 50%;
	text-align: start;
}
.title{
	font-size: 20px;
  color: rgb(28, 101, 169);
  padding: 10px 0 10px 0;

  &:hover {
    text-decoration: underline;
  }
}
.price {
	font-size: 24px;
	color: red;
	flex-grow: 1;
	padding-bottom: 10px;
 }


</style>