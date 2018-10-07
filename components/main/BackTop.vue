<template>
	<back-to-top>
		<div class="btn w-12 h-12 flex" @mouseover="hover = true" @mouseleave="hover = false">
			<img v-show="!hover" class="w-4 m-auto" src="~/assets/img/back-to-top.png">
			<img v-show="hover" class="w-4 m-auto" src="~/assets/img/back-to-top-white.png">
		</div>
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
