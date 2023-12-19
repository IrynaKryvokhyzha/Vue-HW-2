<template>
	<div>
		<athlete-list title="General List" :athleteList="getNotSelectedList" @select="selectAthlete"/>
		<athlete-list title="Selected List" :athleteList="getSelectedList" is-selected  @select="deSelectAthlete"/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AthleteList from './AthleteList.vue';
	export default {
		name: 'AthleteManager',
		components: {
			AthleteList,
		},
		computed: {
			...mapGetters(['getNotSelectedList', 'getSelectedList'])
		},
		methods: {
			...mapActions(['selectAthlete', 'deSelectAthlete', 'initData'])
		},
		created () {
			this.initData();
		},
	}
</script>

<style lang="scss" scoped>

</style>