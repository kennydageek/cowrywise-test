import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {
  const isActive = ref(false);
  const message = ref('');
  const duration = ref(3000);
  const type = ref('');
  const success = (msg, durationTime = 3000) => {
    message.value = msg;
    duration.value = durationTime;
    isActive.value = true;
    type.value = 'success';

    setTimeout(() => {
      isActive.value = false;
      message.value = '';
    }, duration.value);
  };

  const error = (msg, durationTime = 3000) => {
    message.value = msg;
    duration.value = durationTime;
    isActive.value = true;
    type.value = 'error';

    setTimeout(() => {
      isActive.value = false;
      message.value = '';
    }, duration.value);
  };

  return {
    isActive,
    message,
    success,
    error,
    type,
  };
});
