<template>
	<auth-masterpage>
		<div class="label">
			<label>
				User name
				<input v-model="userName" type="text" placeholder="username">
			</label>
			<label>
				Password
				<input v-model="password" type="password" >
			</label>
		</div>
			<button :disabled="!userName || !password" @click="onLogin">Sign in</button>
		
		
	</auth-masterpage>
</template>

<script>
import AuthMasterpage from '../masterpages/AuthMasterpage.vue'
	export default {
		name:'LoginPage',
		components: { AuthMasterpage },
		data() {
			return {
				userName: null,
				password: null,
			}
		},
		methods: {
			onLogin() {
				localStorage.setItem('authParams',
				JSON.stringify({
					userName: this.userName,
					token:'testToken'
				}))
				this.$router.push({
					name:'home'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.label{
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px 10px;
}

button{
	background-color: #42b983;
	border-radius: 5px;
	font-size: 16px;
	margin-bottom: 10px;
	color: black;
	cursor: pointer;
	@media (any-hover: hover){
		&:hover{
			background-color: #70d5a8;
		}
	}

}
</style>