<template>
	<div id="contact">
		<div class="bg-contact py-16 min-h-200 sm:min-h-160 md:min-h-128"><div class="container">
			<div class="flex flex-wrap -mx-4">
				<div class="md:w-1/2 px-4 mb-6">
					<h2 class="text-gold mb-4">Thanks for dropping us a line.</h2>
					<p class="text-white">For the years, the company has won consistent acceptance of customers in the society by virtue of solid strength, good reputation, strict quality management and thoughtful after-sales service.</p>
				</div>
				<div class="md:w-1/2 px-4">
					<form class="flex flex-wrap -mx-2">
						<div v-for="f in fields" :key="f.label" class="w-1/2 px-2">
							<input v-model="f.value" :name="f.label" class="form-control" :placeholder="f.label">
						</div>
						<div class="w-full px-2">
							<textarea v-model="message" name="Message" class="form-control" placeholder="Message" rows="4"/>
							<button class="btn mt-4" type="submit" @click.prevent="getInTouch">Let's get in touch</button>
						</div>
					</form>
				</div>
			</div>
		</div></div>
		<div class="bg-goldblock h-64"></div>
		<div class="relative">
			<div class="absolute w-full px-4" style="bottom: 4rem;">
				<quote/>
				<div class="flex"><div class="mx-auto">
					<div class="min-h-64 bg-white shadow-lg lg:px-16 flex flex-wrap -mx-2 max-w-xl">
						<div v-for="(o,index) in offices" :key="o.img" :class="[{'pt-6 md:pt-0':index===0},'md:w-1/2 px-0 flex']">
							<div class="flex m-auto px-4">
								<div class="my-auto mx-4 md:ml-0"><img :src="`${baseImgUrl+o.img}.png`" :alt="o.img"></div>
								<div>
									<p>{{o.address}}</p>
									<p>{{o.phone}}</p>
									<p>{{o.email}}</p>
								</div>
							</div>
						</div>
					</div>
				</div></div>
			</div>
		</div>
		<div class="pb-8" style="background-color: #020a1f;"><div class="container text-center text-white">
			<div class="py-16">
				<p>Golden Pacific Global Ltd.</p>
				<p>Mappin House, 4 Winsley St, Fitzrovia, London W1W 8HF</p>
				<p>020 1512 3350</p>
			</div>
			<p>© copyright by Geo Pacifit material trading Ltd. 2018</p>
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
			if (this.formReady) {
				fetch('https://submit-form.com/7b319f0b-91db-4797-acc0-539a315765f8', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.formBody)
				}).then(r => {
					alert(r.status >= 200 && r.status < 300 ? 'Thanks for dropping us a line' : 'Something went wrong')
				}).catch(err => {
					alert('Thanks for dropping us a line')
				})
			} else { alert('Please fill in the form') }
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
		offices: [
			{img: 'uk', address: 'Address: Mappin House, 4 Winsley St, Fitzrovia, London W1W 8HF', phone: 'Phone: +44 7521 530350', email: 'Email: info@goldenpacificglobal.com'},
			{img: 'china', address: 'Address: No19 Wenxing Road, Beijiao, Shunde, Foshan, Guangdong', phone: 'Phone: +86 28311975', email: 'Email: info@goldenpacificglobal.com'}
		]
	})
}
</script>
