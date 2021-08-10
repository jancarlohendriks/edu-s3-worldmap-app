<template>
  <div class="RightBar" id="RightBar">
    <h3>Personal</h3>
    <PersonalInfo />
    <br />
    <DiamondCoin />
    <br />
    <Calendar :todos="todos" />
  </div>
</template>

<script>
import DiamondCoin from "@/components/subcomponents/DiamondCoin.vue";
import PersonalInfo from "@/components/subcomponents/PersonalInfo.vue";
import Calendar from "@/components/subcomponents/Calendar.vue";

export default {
  components: {
    DiamondCoin,
    PersonalInfo,
    Calendar,
	},
	computed: {
		todos() {
			return this.$store.getters.showTeamTodos;
		}
	}
};
</script>

<!-- <style lang="scss" scoped> -->
<style lang="scss">
div.RightBar {
  position: absolute;
  top: 50%;
  right: 0;
  width: 15vw;
  height: 75%;
  padding: 20px;
  border-radius: 25px;
  background: white;
  transform: translateY(-50%);
}

</style>