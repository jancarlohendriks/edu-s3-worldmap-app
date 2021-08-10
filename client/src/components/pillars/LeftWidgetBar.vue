<template>
  <div class="LeftBar" id="LeftBar">
		<h3>Team</h3>
		<progress-bar/>
		<br>
		<ranking-list />
		<br>
		<Calendar :todos="todos"/>
	</div>
</template>

<script>
import ProgressBar from "@/components/subcomponents/ProgressBar.vue";
import RankingList from "@/components/subcomponents/RankingList.vue";
import Calendar from "@/components/subcomponents/Calendar.vue";

export default {
	components: { ProgressBar, RankingList, Calendar },
	computed: {
		todos() {
			return this.$store.getters.showPersonalTodos;
		}
	}
};
</script>

<style scoped>
	
div.LeftBar {
	position: absolute;
	left: 0;
	top: 50%;
	width: 15vw;
	height: 80vh;
	padding: 1.25rem;
	list-style: none;
	border-radius: 25px;
	background:white;
	transform: translateY(-50%);
}

</style>