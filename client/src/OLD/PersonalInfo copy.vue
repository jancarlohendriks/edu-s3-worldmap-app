<template>
  <div class="center">
  <div class="property-card">
    <a href="#accountinfo">
      <div class="property-image">
        <div class="property-image-title">
        </div>
      </div></a>
    <div class="property-description">
      <h5>Student name </h5>
      <h6>Class</h6>
      <h6>Group number</h6>

  
    </div>
  </div>
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
body
{
  background-color:#f2f2f2;
  font-family: 'RobotoDraft', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

*
{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5
{
  margin:0px;
  font-size:1.4em;
  font-weight:700;
}
h6
{
  margin:1px;
  font-size:1.0em;
  font-weight:700;
}
p
{
  font-size:12px;
}

.center
{ width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* End Non-Essential  */

.property-card
{
  height:16em;
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

/* Top Half of card, image. */

.property-image
{
  height:10em;
  width:100%;
  padding:1em 2em;
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image:url('https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg');
  background-size:cover;
  background-repeat:no-repeat;
}

/* Bottom Card Section */

.property-description
{
  background-color: #FAFAFC;
  height:6em;
  width:100%;
  position:absolute;
  bottom:0em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align:center;
}

/* Property Cards Hover States */

.property-card:hover .property-description
{
  height:0em;
  padding:0px 1em;
}
.property-card:hover .property-image
{
  height:16em;
}

.property-card:hover .property-social-icons
{
  background-color:white;
}

</style>