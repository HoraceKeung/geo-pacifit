<template>
	<div id="contact">
		<div class="bg-black py-16 min-h-176 sm:min-h-160 md:min-h-128"><div class="container">
			<div class="flex flex-wrap -mx-4">
				<div class="md:w-1/2 px-4 mb-6">
					<h2 class="text-gold mb-4">Thanks for dropping us a line.</h2>
					<p class="text-white">For the years, the company has won consistent acceptance of customers in the society by virtue of solid strength, good reputation, strict quality management and thoughtful after-sales service.</p>
				</div>
				<div class="md:w-1/2 px-4">
					<form class="flex flex-wrap -mx-2">
						<div v-for="f in fields" :key="f.label" class="w-1/2 px-2">
							<input v-model="f.value" class="form-control" :placeholder="f.label">
						</div>
						<div class="w-full px-2">
							<textarea v-model="message" class="form-control" placeholder="Message" rows="4"/>
							<button class="btn mt-4" type="submit" @click.prevent="getInTouch" :disabled="!formReady">Let's get in touch</button>
							<p class="text-white mt-2">{{resMsg}}</p>
						</div>
					</form>
				</div>
			</div>
		</div></div>
		<div class="bg-goldblock h-64"></div>
		<div class="relative">
			<div class="absolute w-full px-4" style="bottom: 4rem;">
				<quote/>
				<div class="container bg-white py-8 md:py-0"><div class="min-h-64 flex flex-wrap -mx-2">
					<div v-for="o in offices" :key="o.img" class="md:w-1/2 px-2 flex">
						<div class="flex m-auto">
							<div class="my-auto mr-4"><img :src="`/img/${o.img}.png`" :alt="o.img"></div>
							<div>
								<p>{{o.address}}</p>
								<p>{{o.phone}}</p>
								<p>{{o.email}}</p>
							</div>
						</div>
					</div>
				</div></div>
			</div>
		</div>
		<div class="pb-8" style="background-color: #01081a;"><div class="container text-center text-white">
			<div class="py-16">
				<p>Jmax Metals Trading Ltd.</p>
				<p>34 Park Avenue, Staines, TW19 5ET</p>
				<p>020 1512 3350</p>
			</div>
			<p>© copyright by Jmax Metals Trading Ltd. 2018</p>
		</div></div>
	</div>
</template>

<script>
import Quote from '~/components/Quote'
export default {
	components: {Quote},
	computed: {
		formBody () {
			let body = this.fields.reduce((obj, f) => {
				obj[f.label] = f.value
				return obj
			}, {})
			body.Message = this.message
			return body
		},
		formReady () { return Object.values(this.formBody).every(x => x) }
	},
	methods: {
		getInTouch () {
			fetch('https://formspree.io/chenjiangquan123@gmail.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.formBody)
			}).then(r => {
				this.resMsg = r.status >= 200 && r.status < 300 ? 'Thanks for dropping us a line' : 'Something went wrong'
				setTimeout(() => { this.resMsg = null }, 5000)
			})
		}
	},
	data: () => ({
		fields: [
			{label: 'First name', value: null},
			{label: 'Last name', value: null},
			{label: 'Email', value: null},
			{label: 'Product needed', value: null}
		],
		message: null,
		resMsg: null,
		offices: [
			{img: 'uk', address: '34 Park Avenue, TW19 5ET', phone: '020 5136 5135', email: 'UK@jmaxmetalstrading.com'},
			{img: 'china', address: 'Guangdong', phone: '020 5136 5135', email: 'China@jmaxmetalstrading.com'}
		]
	})
}
</script>
