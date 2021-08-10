<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/personal">Personal</router-link> |
			<router-link to="/team">Team</router-link> |
			<router-link to="/class">Class</router-link> |
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss">

	@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap');

	body {
		font-family: 'Open Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1, h2, h3, h4, h5 {
		font-family: 'Montserrat', sans-serif;
	}

	// #app {
	// 	text-align: center;
	// }

	#nav {
		position: absolute;
		text-align: center;
		width: 50%;
		padding: 0.5%;
		border-radius: 5px;
		left:50%;
		transform: translateX(-50%);
		background-color: whitesmoke;
		
	}
	
	ul, .contact ul {
		list-style: none;
		font-size: 0;
	}

</style>