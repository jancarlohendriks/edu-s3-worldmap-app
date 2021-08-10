<template>
  <div class="property-card">
		<div class="RankingList" id="RankingList">
			<h3>Top 5</h3>
			<ul>
				<li>
					<h4>Name</h4>
					<h4>Coins</h4>
				</li>
			</ul>
			<ul>
				<li v-for="(item, index) in list" :key="index">
					<span>{{index + 1}}. {{ item.name }}</span>
					<span>💰 {{ item.points }}</span>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     list: []
  //   };
	// },
	computed: {
		list() {
			return this.$store.state.leaderboard;
		}
	},
	mounted() {
		this.$store.getters.showLeaderboard;
	},
};
</script>

<style lang="scss" scoped>

.property-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 15em;
  width: 100%;
	padding: .5rem;
  border-radius: 16px;
  overflow: hidden;

	h3 {
		margin: 0;
	}

	h4 {
		margin: .5rem 0;
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			display: flex;
			justify-content: space-between;

			&:not(:last-child) {
				margin-bottom: .5rem;
			}

			span:nth-child(2) {
				font-weight: bold;
			}
		}
	}
}

/* card */

.property-description {
  background-color: #fafafc;
  height: 15em;
  width: 100%;
  padding: 1em 2em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
}
</style>