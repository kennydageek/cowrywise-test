<template>
  <Modal :visible="isModalOpen" @close="closeModal" class="container">
    <div class="modal-content">
      <img
        :src="props.details.urls.thumb"
        class="modal-image"
        :alt="props.details.alt_description"
        loading="lazy"
        sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1000px"
        :srcset="
          props.details?.urls?.thumb +
          ' 320w, ' +
          props.details?.urls?.small +
          ' 640w, ' +
          props.details?.urls?.regular +
          ' 1080w'
        "
      />

      <div class="user-details">
        <p class="name">{{ props.details.user.name }}</p>
        <p class="location">{{ props.details.user.location }}</p>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { defineProps } from 'vue';
import Modal from '@/components/CwModal.vue';

const props = defineProps({
  details: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.modal-content {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 400px;
    display: block;
  }
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;

  @media (max-width: 1024px) {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media (max-width: 768px) {
    height: 80%;
  }

  @media (max-width: 480px) {
    height: 80%;
  }
}

.user-details {
  background-color: rgba(255, 255, 255, 0.99);
  padding: 2rem 4rem;
  text-align: left;
  bottom: 0;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 1.5rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
}

.name {
  font-size: 2rem;
  font-weight: 500;
  color: #344c70;
  line-height: 2;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
}

.location {
  font-size: 1.6rem;
  color: #555;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
}
</style>
