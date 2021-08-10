<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
		{{ message }}
	</div>
</template>

<script>
export default {
  name: "LoadingScreen",
	data() {
		return {
			message: '',
			isLoading: true
		}
	},
	beforeCreate() {

		window.addEventListener("DOMContentLoaded", () => {
			this.message = 'Preparing page'
		});
		
		window.addEventListener("load", () => {
			this.message = 'Enjoy!';
			setTimeout(() => {
				this.isLoading = false;
			}, 1000)
		});

	}
};
</script>

<style>
.loader {
	position: fixed;
	display: block;
	color: white;
	font-size: 32px;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	padding-top: 10vh;
	text-align: center;
	background-color: #63ab97;
	pointer-events: none;
	overflow: hidden;
	z-index: 9999;
}

.fadeout {
	animation: fadeout 2s forwards;
}

@keyframes fadeout {
	to {
		opacity: 0;
		visibility: hidden;
	}
}
</style>
