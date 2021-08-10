<template>
  <div>
    <div class="center">
      <div class="property-card">
        <div class="property-description">
          <h6>
            <img src="..\..\..\src\assets\diamond.svg" style="height: 42px" />
            {{ Diamondcount }}
            <img
              src="..\..\..\src\assets\coin-stack.svg"
              style="height: 42px"
            />{{ Coincount }}
          </h6>
        </div>
      </div>
    </div>

    <button id="clickDiamond" @click="addDiamond">Add Diamond</button>
    <button id="clickCoin" @click="addCoin">Add Coin</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Diamondcount: 0,
      Coincount: 0,
    };
  },

  methods: {
    test() {
      console.log("test");
    },
    addDiamond() {
      this.Diamondcount++;
    },
    addCoin() {
      this.Coincount++;
    },
  },
};
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
  margin: 0px;
  font-size: 1.4em;
  font-weight: 700;
}
h6 {
  color: black;
  margin: 1px;
  font-size: 50px;
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
  padding-top: 2%;
}

/* End Non-Essential  */

.property-card {
  height: 5em;
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
}

/* card */

.property-description {
  background-color: #fafafc;
  height: 5em;
  width: 100%;
  padding: 1em 2em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align: center;
}
</style>