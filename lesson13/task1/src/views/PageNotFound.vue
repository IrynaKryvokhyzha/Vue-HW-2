<template>
	<main-masterpage>
		<div class="error">
			<font-awesome-icon :icon="['fas', 'bug']" />
			<span>404</span>
		</div>
		<div class="text">
			<p class="text-title">Page not found</p>
			<p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at support</p>
		</div>
		<button @click="onClick" class="button">Exit</button>
	</main-masterpage>
	
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'

	export default {
		name:'PageNotFound',
		components: {
			MainMasterpage,
		},
		methods: {
			onClick() {
				this.$router.push({
					name:'home'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.error {
	color: #42b983;
	font-size: 32px;
}
span{
	padding-left: 10px;
}
.text {
	
}
.text-title{
	font-size: 28px;
	font-weight: bold;
	color: rgb(23, 23, 23);
}
.button {
	cursor: pointer;
	background-color: inherit;
	border-radius: 5px;
	background-color:  #23bd78;
	padding: 5px 10px;
	@media (any-hover: hover){
		&:hover{
			background-color:  #77caa5;
		}
	}
}

</style>