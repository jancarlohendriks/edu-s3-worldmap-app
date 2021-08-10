<template>
  <div class="LeftBar" id="LeftBar">
		<h3>Team</h3>
		<progress-bar />
		<br>
		<v-calendar
			class="leftbar-calendar"
			is-expanded
		></v-calendar>
		<br>
		<ranking-list />
		<br>
		<ul>
			<li v-for="(item, index) in list" :key="index">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
import ProgressBar from "@/components/metrics/ProgressBar.vue";
import RankingList from "@/components/metrics/RankingList.vue";

export default {
  components: { ProgressBar, RankingList },

  data() {
    return {
      list: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
	
div.LeftBar {
	position: absolute;
	left: 0;
	top: 50%;
	width: 15vw;
	height: 75%;
	padding: 1.25rem;
	list-style: none;
	opacity: 0.8;
	border-radius: 25px;
	background:whitesmoke;
	transform: translateY(-50%);
}

.leftbar-calendar {
	border: 0;
}


</style>