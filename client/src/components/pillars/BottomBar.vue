<template>
  <div class="BottomBar" id="BottomBar">
    <h3>Class showcase</h3>
    <Showcase />
  </div>
</template>

<script>
import Showcase from "@/components/sections/Showcase.vue";

export default {
  components: {
    Showcase,
  },
};
</script>

<style scoped>
div.BottomBar {
  position: fixed;
  bottom: 0px;
  left: 50%;
  width: 60vw;
  /* height: 20%; */
  padding: 1.25rem;
  border-radius: 25px;
  background: white;
  transform: translateX(-50%);
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;transform: scaleX(-1);'><text y='50%'>🔑</text></svg>")
		16 0,
    auto; /*!emojicursor.app*/
}
</style>