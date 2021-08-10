<template>
  <div class="center">
    <div class="property-card">
      <div class="parent">
        <div class="image">
          <a href="#">
            <div class="property-image">
              <img
                :src="avatar"
                alt="Avatar"
                style="border-radius: 50%; width: 90px"
              /></div
          ></a>
        </div>
        <div class="text">
          <div class="property-description">
            <h5 id="student_name">Student name</h5>
            <h6 id="student_class">Class</h6>
            <h6 id="student_groupnr">Group number</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import loadContent from "@/components/helpers/api";
export default {
	computed: {
		avatar() {
			return this.$store.state.avatar
		},
		announcements() {
			const ann = this.$store.state.announcements;
			console.log(ann);
			return ann
		}
	},
	mounted() {
		this.$store.getters.showAvatar;
		this.$store.getters.showAnnouncements;
	},
}
</script>

<style scoped>
body {
  background-color: #f2f2f2;
  font-family: "RobotoDraft", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

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
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
}
.text {
  grid-area: 1 / 2 / 2 / 3;
}
.property-card {
  height: 8em;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  overflow: hidden;
  background-color: #fafafc;
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* card */
.property-image {
  height: 8em;
  padding: 1em 1em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;
  justify-content: center;
  align-items: center;
}
.property-description {
  height: 8em;
  position: relative;
  top: 1em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  text-align: center;
}
</style>