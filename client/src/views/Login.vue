<template>
	<div class="home">
    <p>Log In</p>
		<button @click="authorize">Login</button>
  </div>
</template>

<script>

import authorize from "@/components/helpers/authorize";

export default {
  name: 'Home',
  components: {
	},
	methods: {
		authorize: authorize
	}
}
</script>