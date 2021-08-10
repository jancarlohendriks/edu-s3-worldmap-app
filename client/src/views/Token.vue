<template>
	<div>
		<input v-model="token" placeholder="Insert API Token">
		<button @click="goHome">Next</button>
	</div>
</template>

<script>
import authorize from "@/components/helpers/authorize";
export default {
	data() {
		return {
			token: null
		}
	},
	methods: {
		authorize: authorize,
		goHome() {
			localStorage.setItem('token', this.token);
			this.authorize();
		}
	},
}
</script>