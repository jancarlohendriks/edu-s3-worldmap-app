<template>
  <div class="modal-wrapper" v-if="visible">
		<!-- <slot name="content"></slot> -->
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <div class="modal-buttons">
      <button class="modal-button" @click="hide">Close</button>
      <button v-if="hasConfirm" class="modal-button" @click="confirm">Confirm</button>
    </div>
  </div>
</template>


<script>
import Modal from '@/plugins/modal';

export default {
  data() {
    return {
      // variable that shows/hides modal
      visible: false,
      title: "",
			text: "",
    };
  },
  methods: {
    hide() {
      // method for closing modal
      this.visible = false;
    },
    confirm() {
      // we must check if this.onConfirm is function
      if(typeof this.onConfirm === 'function') {
        // run passed function and then close the modal
        this.onConfirm();
        this.hide();
      } else {
        // we only close the modal
        this.hide();
      }
    },
    show(params) {
      // making modal visible
      this.visible = true;
      // setting title and text
      this.title = params.title;
      this.text = params.text;
      // setting callback function
			this.onConfirm = params.onConfirm;
			this.hasConfirm = this.onConfirm ? true : false;
    }
	},
	
	beforeMount() {
    // here we need to listen for emited events
    // we declared those events inside our plugin
    Modal.EventBus.$on('show', (params) => {
      this.show(params)
    })
  }
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vh;
	padding: 2rem;
  z-index: 9999;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background-color: #fff;
}

.modal-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}

.modal-button {
  flex-grow: 1;
}
</style>