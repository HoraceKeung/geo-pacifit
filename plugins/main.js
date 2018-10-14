import Vue from 'vue'
import VModal from 'vue-js-modal'
import VueScrollTo from 'vue-scrollto'
Vue.use(VModal)
Vue.use(VueScrollTo)
// Global mixin
Vue.mixin({
	computed: {
		baseImgUrl () { return process.env.baseImgUrl }
	}
})