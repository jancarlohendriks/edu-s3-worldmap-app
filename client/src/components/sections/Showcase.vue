<template>
  <div class="center">
    <div class="Like">
      <div
				v-for="(project, index) in projects"
				:key="'videoLink' + index"
				:class="'Like' + (index + 1)">
        <iframe
          width="100%"
          height="130px"
          :src="project.link"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div
				v-for="(project, index) in projects"
				:key="'videoTitle' + index"
				:class="'Like'+ (index + 1) +'txt'">
				<p>{{ project.title }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.getters.showProjects
    };
  },
};
</script>

<style scoped>

h5 {
  color: black;
  margin: 0px;
  font-size: 1.2em;
  font-weight: 700;
}
h6 {
  margin: 1px;
  font-size: 0.9em;
  font-weight: 700;
}
p {
  font-size: 12px;
}

.center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* End Non-Essential  */
.Like {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 0.2fr; */
  grid-column-gap: 8px;
  grid-row-gap: 5px;
}

/* [class*="Like"]:not(.Like) {
	margin-bottom: 2rem;
} */

.Like1 {
  grid-area: 1 / 1 / 1 / 2;
}
.Like2 {
  grid-area: 1 / 2 / 1 / 3;
}
.Like3 {
  grid-area: 1 / 3 / 1 / 4;
}
.Like4 {
  grid-area: 1 / 4 / 1 / 5;
}
.Like5 {
  grid-area: 1 / 5 / 1 / 6;
}
</style>