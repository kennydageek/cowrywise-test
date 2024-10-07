<template>
  <div v-if="isActive" class="toast" :class="[{ show: isActive }, type]">
    {{ message }}
  </div>
</template>

<script setup>
import { useToastStore } from '@/stores/toastStore.js';
import { computed } from 'vue';

const toastStore = useToastStore();
const isActive = computed(() => toastStore.isActive);
const message = computed(() => toastStore.message);
const type = computed(() => toastStore.type);
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 0;
  transform: translateX(-50%);

  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 9999;

  @media (max-width: 1024px) {
    right: -30px;
  }

  @media (max-width: 768px) {
    right: -30px;
  }

  @media (max-width: 480px) {
    right: -30px;
  }
}

.toast.show {
  opacity: 1;
}

.toast.error {
  background-color: rgba(238, 3, 3, 0.895);
}

.toast.success {
  background-color: rgba(62, 131, 12, 0.8);
}
</style>
