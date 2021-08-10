<template>
  <div class= "Diamonds-Coins" id="Diamonds-Coins">
     <p>Diamonds: {{ Diamondcount }} </p>
     <p>Coins: {{ Coincount }} </p>

     <button id="clickDiamond" @click="addDiamond">Add Diamond</button>
     <button id="clickCoin" @click="addCoin">Add Coin</button>
  </div>
</template>

<script>


export default {

  data() {
    return {
      Diamondcount: 0 ,
      Coincount:0
    }
  },

  methods: {
    test() {
      console.log("test");
    },
    addDiamond(){
      this.Diamondcount++;
    },
    addCoin(){
      this.Coincount++;
    }

  }

}
</script>

<style scoped>
div.RightBar {
  position: absolute;
  right: 0;
    top:50%;
  transform: translateY(-50%);
  width: 15%;
  height: 50%;
  border-radius: 25px;
  background: whitesmoke;
  padding: 20px;
}
</style>