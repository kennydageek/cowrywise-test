<template>
  <div
    v-if="visible"
    class="modal-overlay"
    :class="{ 'modal-visible': visible, 'modal-hidden': !visible }"
    tabindex="-1"
  >
    <div class="modal-container">
      <span><img src="@/assets/xmark.svg" @click="closeModal" alt="" /></span>
      <div class="modal-content">
        <!-- Modal Header -->
        <!-- <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button class="close-button" @click="closeModal">×</button>
        </div> -->

        <!-- Modal Body -->
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
// import StatefulButton from './stateful-button.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  cancelTitle: {
    type: String,
    default: 'Cancel',
  },
  okTitle: {
    type: String,
    default: 'OK',
  },
  okLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close', 'ok_clicked']);

const closeModal = () => {
  console.log('KDKD');
  emit('close');
};

const emitOkClicked = () => {
  emit('ok_clicked');
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}

.modal-container {
  width: 100%;
  max-width: 80%;
  // height: 800px;
  padding: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;

  & span {
    position: absolute;
    right: -7rem;
    top: -3rem;
    cursor: pointer;

    @media (max-width: 1024px) {
      // height: 600px;
      // max-height: 400px;
    }

    @media (max-width: 768px) {
      top: -2rem;
      right: -2rem;
      // height: 600px;
      // max-height: 400px;
    }

    @media (max-width: 480px) {
      // height: 600px;
      display: block;
    }

    // background: #000;
  }
}

.modal-content {
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.close-button {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;

  &:hover {
    color: red;
  }
}

.modal-body {
  // padding: 1.5rem;
  // max-height: 60vh;
  border-radius: 0.5rem;

  overflow-y: hidden;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
}

.modal-ok-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}

.modal-cancel-button {
  background-color: transparent;
  border: 1px solid #ccc;
  color: #333;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
}

/* Visibility transitions */
.modal-visible {
  opacity: 1;
}

.modal-hidden {
  opacity: 0;
  pointer-events: none;
}
</style>
