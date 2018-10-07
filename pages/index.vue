<template>
	<section>
		<hero/>
		<about/>
		<products/>
		<contact/>
	</section>
</template>

<script>
export default {
	components: (() => {
		// Import all components from ~/components/main
		const requireComponent = require.context('../components/main', false, /[A-Z]\w+\.(vue|js)$/)
		return requireComponent.keys().reduce((obj, fileName) => {
			const componentConfig = requireComponent(fileName)
			obj[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = componentConfig.default || componentConfig
			return obj
		}, {})
	})()
}
</script>
