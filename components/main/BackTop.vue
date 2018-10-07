<template>
	<back-to-top>
		<button class="btn w-12 h-12 flex" @mouseover="hover = true" @mouseleave="hover = false">
			<img v-show="!hover" class="w-4 m-auto" src="~/assets/img/back-to-top.png">
			<img v-show="hover" class="w-4 m-auto" src="~/assets/img/back-to-top-white.png">
		</button>
	</back-to-top>
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
	components: {BackToTop},
	data: () => ({
		hover: false
	})
}
</script>
