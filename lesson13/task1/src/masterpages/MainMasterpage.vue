<template>
	<div class="wrapper">
		<header class="header">
			<div class="navigation">
				<div class="logo">
					<font-awesome-icon :icon="['fas', 'school']" />
				</div>
				<div class="logo-name">EUSD</div>
				<nav class="nav-menu">
					<router-link to="/">Home</router-link> |
					<router-link :to="{name: 'classes-select'}">Classes</router-link> |
					<router-link to="/teachers">Teachers</router-link>
				</nav>
				<div class="log-menu">
					<div v-if="authParams">
						<span>{{userName}}</span>
						<button @click="onLogout">Log out</button>
						</div>
						<div v-else>
						<button @click="onLogin">Sign in</button>
						</div>
				</div>
			</div>
			
		</header>

		
		 <main class="page">
			<slot></slot>
		</main>
			<footer class="footer">
				<div class="footer-content">
					<div class="footer-dist">Eureka Union School District</div>
					<div class="footer-contact">Contact us</div>
				</div>
				<div class="footer-social social">
					<div class="social__facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></div>
					<div class="social__instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></div>
					<div class="social__twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></div>
					
				</div>
			
			</footer>
	</div>
</template>

<script>
	export default {
		name:'MainMasterpage',
		computed: {
			authParams() {
				const params = localStorage.getItem("authParams")
				return params ? JSON.parse(params) : null
			},
			userName(){
				return this.authParams?.userName
			}
		},
		methods: {
			onLogout() {
				localStorage.removeItem('authParams')
				this.$router.push({
					name:'login'
				})
			},
			onLogin(){
				this.$router.push({
					name:'login'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100%;
	padding: 15px;
	
	overflow: hidden;
	justify-content: center;
}
.header {

}
.navigation {
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
}
.logo{
	align-self: center;
	font-size: 24px;
}
.logo-name{
	align-self: center;
	font-weight: 600;
}
.nav-menu {
flex: 1 0 auto;
}
.log-menu {
	justify-content: center;
	align-self: center;
}
.footer {
	position: fixed;
	bottom: 15px;
	display: flex;
	flex-direction: row;
	gap: 100px;

}
.footer-content {
	display: flex;
	flex-direction: row;
	gap: 50px;
	flex: 1 1 auto;
}
.footer-dist {
	@media (any-hover: hover){
		&:hover{
			color: #7a7f83;
			cursor: pointer;
		}
	}
}
.footer-contact {
	@media (any-hover: hover){
		&:hover{
			color: #7a7f83;
			cursor: pointer;
		}
	}
}

.footer-social {
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-self: center;
	justify-content: flex-end;
}
.social {

		// .social__facebook

		&__facebook {
			@media (any-hover: hover){
				&:hover{
					color: #7a7f83;
					cursor: pointer;
				}
			}
		}

		// .social__instagram

		&__instagram {
			@media (any-hover: hover){
				&:hover{
					color: #7a7f83;
					cursor: pointer;
				}
			}
		}

		// .social__twitter

		&__twitter {
			@media (any-hover: hover){
				&:hover{
					color: #7a7f83;
					cursor: pointer;
				}
			}
		}
}
button{
	background-color: #42b983;
	border-radius: 5px;
	cursor: pointer;
	@media (any-hover: hover){
		&:hover{
			background-color: #70d5a8;
		}
	}

}
span{
	padding-right: 10px;

}

</style>