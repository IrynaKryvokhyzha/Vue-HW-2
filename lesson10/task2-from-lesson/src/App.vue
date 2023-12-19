<template>
<div>
	<shops-list/>
	<products-list/>
	<divided-products/>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import ShopsList from './components/ShopsList.vue';
import ProductsList from './components/ProductsList.vue';
import DividedProducts from './components/DividedProducts.vue';

export default {
  name: "App",
  components: {
    ShopsList,
	 ProductsList,
	 DividedProducts
    
  },
  methods: {
	...mapActions(['loadData'])
  },
  created () {
	this.loadData();
  },
};
</script>

<style lang="scss">

</style>
