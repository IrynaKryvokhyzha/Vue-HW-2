<template>
	<main-masterpage>
		<div class="home-text">
			Welcome to our school website
		</div>
	</main-masterpage>
	
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
	export default {
		name:'HomePage',
		components: {
			MainMasterpage,
		},
	}
</script>

<style lang="scss" scoped>
.home-text{
	font-size: 24px;

}
</style>