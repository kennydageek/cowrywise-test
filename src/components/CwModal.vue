<template>
  <div
    v-if="visible"
    class="modal-overlay"
    :class="{ 'modal-visible': visible, 'modal-hidden': !visible }"
    tabindex="-1"
  >
    <div class="modal-container">
      <span
        ><img src="@/assets/icons/xmark.svg" @click="closeModal" alt=""
      /></span>
      <div class="modal-content">
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
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
    }

    @media (max-width: 768px) {
      top: -2rem;
      right: -2rem;
    }

    @media (max-width: 480px) {
      display: block;
    }
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

.modal-body {
  border-radius: 0.5rem;

  overflow-y: hidden;
}
</style>
