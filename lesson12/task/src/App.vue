<template>
<div class="container">
	<nav>
		<router-link to="/">{{$t('menu.home')}}</router-link> |
		<router-link to="/workers">{{$t('menu.workers')}}</router-link> |
		<router-link :to="{name: 'candidates'}">{{$t('menu.candidates')}}</router-link> |
		<router-link :to="{name: 'interview'}">{{$t('menu.interviews')}}</router-link>
	 </nav>
	 <div class="language">
		<span>{{$t('menu.currentLanguage')}}: {{ currentLanguage }}</span>
		<v-btn class="button" @click="onLangChange('ua')">Укр</v-btn>
		<v-btn class="button" @click="onLangChange('en')">Eng</v-btn>
	 </div>
</div>
		
		 <router-view />

  
</template>
<script>
export default{
	computed: {
		currentLanguage() {
			return this.$i18n.locale === 'ua' ? 'Укр' : 'Eng'
		}
	},
	created () {
		this.$i18n.locale=localStorage.getItem('lastLanguage') ?? process.env.VUE_APP_I18N_LOCALE

		const self = this
		window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('lastLanguage')) {
					self.$i18n.locale = localStorage.getItem('lastLanguage')
					self.$router.go()
            }
		})

	},
	methods: {
		onLangChange(lang) {
			this.$i18n.locale= lang
			localStorage.setItem('lastLanguage', this.$i18n.locale)
		}
	},
}

</script>
<style lang="scss" scoped>
@import './assets/style/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  justify-content: center;
}
.container{
	display: flex;
	align-items: center;

}
nav {
  padding: 30px;
  flex: 1 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
span{
padding-right: 10px;

}
</style>
