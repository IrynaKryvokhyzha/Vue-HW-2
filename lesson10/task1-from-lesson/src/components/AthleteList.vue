<template>
	<h2>{{title}}</h2>
	<div class="cnt">
		<div v-for="athlete in athleteList" :key="athlete.id" class="cnt__athlete" @click="$emit('select', athlete.id)">
			<div>{{athlete.name}}</div>
			<div :class="{
				'is-selected': isSelected,
				'is-not-selected': !isSelected
			}
				">{{actionButton}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AthleteList',
		props: {
			title: {
				type: String,
				required: true
			},
			athleteList: {
				type: Array,
				default: ()=>[]
			},
			isSelected:{
				type: Boolean,
				default: false
			}
		},
		emits:['select'],
		computed: {
			actionButton() {
				return this.isSelected ? '-' : '+'
			}
		},
	}
</script>

<style lang="scss" scoped>
.cnt {
	width: 300px;
	border: 2px solid black;
	padding: 10px;
	// .cnt__athlete

	&__athlete {
	border: 2px solid black;
	margin: 5px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 5px;
	font-size: 18px;

	}
}
.is-selected{
	color: red;
	font-weight: 800;
}
.is-not-selected{
	color: green;
	font-weight: 800;

}
</style>