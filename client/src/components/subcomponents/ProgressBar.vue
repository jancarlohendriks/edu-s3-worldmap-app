<template>
  <div>
  <div class="center">
  <div class="property-card">
  <div class="property-description">
  <div class= "Progress" id="Progress">
    <label for="progressbar">Your group's progress:</label>
    <br>
    <!-- <progress id="progressbar" :value="Progresscount" max="100"> {{ Progresscount }}% </progress> -->
    <div class="progresscount">
      <progress class="progressbar" id="progressbar" value="0" max="100"></progress>
      <span> {{ Progresscount }}%</span>
    </div>
  </div>
  </div>
  </div>
  </div>
     <button id="click1%" @click="add1percent">Add 1%</button>
     <button id="click5%" @click="add5percent">Add 5%</button>
  </div>

</template>

<script>


export default {

  data() {
    return {
      Progresscount: 0 ,
    }
  },

  methods: {
    test() {
      console.log("test");
    },
    add1percent(){
      if (this.Progresscount<100){
      this.Progresscount++;
      document.getElementById("progressbar").value = this.Progresscount;
      }
    },
    add5percent(){
        if(this.Progresscount>95){this.Progresscount=100; document.getElementById("progressbar").value = this.Progresscount;}
        if(this.Progresscount<=95){
      this.Progresscount+=5;
      document.getElementById("progressbar").value = this.Progresscount;
      }
      
    }

  }

}
</script>

<style lang="scss" scoped>

.center
{ width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}

.property-card
{
  height:4em;
  width:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;

}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* card */

.property-description
{
  background-color: #FAFAFC;
  height:4em;
  width:100%;
  left: 0px;
  top:0px;
  padding: 0.5em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  text-align:center;
}

.progressbar{
 /* style rules */
  width: 80%;
  background-color: #f3f3f3;
  border: 0;
  height: 18px;
  border-radius: 9px;
  z-index: -1;
}
progress::-webkit-progress-bar {
  /* style rules */
background-color: #f3f3f3;
  border: 0;
  height: 18px;
  border-radius: 9px;

}
progress::-webkit-progress-value {
  /* style rules */
  background-color: green;
  border: 0;
  height: 18px;
  border-radius: 16px;
}
progress::-moz-progress-bar {
  /* style rules */
    background-color: green;
  border: 0;
  height: 18px;
  border-radius: 16px;
}

.progresscount{
  color: black;
  position: relative;
  z-index: 0;
  
  span{
    position: absolute;
   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  }  
}

</style>