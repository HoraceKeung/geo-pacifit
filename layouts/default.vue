<template>
	<div class="flex flex-col min-h-screen">
		<div class="flex-1"><nuxt/></div>
		<back-to-top>
			<button class="btn w-12 h-12 flex" @mouseover="hover = true" @mouseleave="hover = false">
				<div class="m-auto">
					<img v-show="!hover" class="w-4" src="~/assets/img/back-to-top.png">
					<img v-show="hover" class="w-4" src="~/assets/img/back-to-top-white.png">
				</div>
			</button>
		</back-to-top>
	</div>
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