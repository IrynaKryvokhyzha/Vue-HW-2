<template>
	<main-masterpage>
		<div class="hello">
				<h1>{{$t("messages")}}</h1>
		</div>
	</main-masterpage>
</template>

<script>
import MainMasterpage from '../masterpages/MainMasterpage.vue';
export default {
  name: "HomeView",
  components: { MainMasterpage },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
	padding-left: 20px;

}
</style>
