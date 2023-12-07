<template>
	<div>
		<font-awesome-icon :icon="['fas', 'school-lock']" />
	</div>
	<slot></slot>
	<div>You have to authorize</div>
</template>

<script>
	export default {
		name:'AuthMasterpage'
	}
</script>

<style lang="scss" scoped>
div{
	font-size: 24px;
}
</style>