<template>
  <header>
    <div class="container">
      <nav class="navbar navbar--skewed">
        <ul class="navbar__wrapper">
          <li class="navbar__item navbar__item__first">
            <!-- Placeholder for first item -->
          </li>
          <li class="navbar__item navbar__item__link">
            <span class="navbar__item__text">
							<!-- <router-link to="/"> -->
								Home
							<!-- </router-link> -->
						</span>
          </li>
          <li class="navbar__item navbar__item__link">
            <span class="navbar__item__text">
							<!-- <router-link to="/personal"> -->
								Personal
							<!-- </router-link> -->
						</span>
          </li>
          <li class="navbar__item navbar__item__link">
            <span class="navbar__item__text">Team</span>
          </li>
          <li class="navbar__item navbar__item__link">
            <span class="navbar__item__text">Class</span>
          </li>
          <li class="navbar__item navbar__item__last">
            <!-- Placeholder for first item -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

	.container {
		position: relative;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		justify-content: space-around;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.navbar {
		width: 100%;
	}
	.navbar .navbar__wrapper {
		position: relative;
		display: -webkit-box;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-flow: row nowrap;
		-webkit-box-align: start;
		align-items: flex-start;
		justify-content: space-around;
		list-style: none;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		padding: 0;
		overflow: hidden;
	}
	.navbar .navbar__item {
		position: relative;
		-webkit-box-flex: 1;
		flex: 1 0 165px;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		padding: 10px 20px;
		height: 80px;
		max-width: 1026px;
		background: #031926;
		color: whitesmoke;
		margin: 0 2px;
		-webkit-transition: all 250ms linear;
		transition: all 250ms linear;
		box-sizing: border-box;
	}
	.navbar .navbar__item__first {
		display: inline;
		margin-right: 2px;
		max-width: 170px;
	}
	.navbar .navbar__item__first:before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		height: 100%;
		width: calc(100% + 170px);
		background: #2e86ab;
	}
	.navbar .navbar__item__last {
		display: inline;
		margin-left: 2px;
		max-width: 170px;
	}
	.navbar .navbar__item__last:after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 100%;
		width: calc(100% + 170px);
		background: #2e86ab;
	}
	.navbar .navbar__item__link:before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		-webkit-transition: all 500ms ease-in;
		transition: all 500ms ease-in;
		box-sizing: border-box;
		border: 1px solid transparent;
	}
	.navbar .navbar__item__text {
		font-size: 1.5em;
	}
	.navbar--skewed .navbar__item {
		-webkit-transform: skew(-24deg);
		transform: skew(-24deg);
	}
	.navbar--skewed .navbar__item__text {
		-webkit-transform: skew(24deg);
		transform: skew(24deg);
	}
	.navbar--skewed .navbar__item__link:hover {
		background: #2e86ab;
		color: black;
		cursor: pointer;
	}
	.navbar--skewed .navbar__item__link:hover:before {
		width: 100%;
		border-color: #fff transparent;
	}
	.navbar--reverse .navbar__item {
		-webkit-transform: skew(24deg);
		transform: skew(24deg);
	}
	.navbar--reverse .navbar__item__text {
		-webkit-transform: skew(-24deg);
		transform: skew(-24deg);
	}
	.navbar--reverse .navbar__item__link:hover {
		background: #98c1d9;
		color: #30424d;
		cursor: pointer;
	}
	.navbar--reverse .navbar__item__link:hover:before {
		width: 100%;
		border-color: #fff transparent;
	}
	.navbar--rounded .navbar__item {
		border-radius: 50px 10px 50px 10px;
	}
	.navbar--rounded .navbar__item__link:hover {
		-webkit-box-flex: 3;
		flex: 3;
		font-size: 1.5em;
		background: #98c1d9;
		color: #30424d;
		cursor: pointer;
		border: 1px solid #fff;
	}
	.navbar--rounded .navbar__item__first:before {
		border-radius: 0px 10px 50px 10px;
	}
	.navbar--rounded .navbar__item__last:after {
		border-radius: 50px 0px 0px 10px;
	}

</style>