<template>
  <main>
    <!-- Header Section with Search Bar -->
    <header class="header">
      <form class="search-field" @submit.prevent="fetchSearchPhotos">
        <input
          type="text"
          placeholder="Search for photo"
          class="search-field__input"
          v-model="searchTerm"
        />
      </form>
    </header>

    <div class="gallery">
      <div
        v-for="(image, index) in photos"
        :key="index"
        class="gallery-item"
        :style="{ animationDelay: `${index * 100}ms` }"
        :class="getGridItemClass(index)"
        @click="handleOpenModal(image)"
      >
        <photo-card-skeleton v-if="loading" />

        <photo-card :item="image" v-else />
      </div>
    </div>

    <photo-card-modal
      :visible="isModalOpen"
      :details="photoDetails"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
import PhotoCard from '@/components/PhotoCard.vue';
import { FetchPhotoService } from '@/services';
import { onMounted, ref, watch } from 'vue';
import PhotoCardModal from '@/components/PhotoCardModal.vue';
import PhotoCardSkeleton from '@/components/PhotoCardSkeleton.vue';

const isModalOpen = ref(false);
const photos = ref([]);
const photoDetails = ref();
const searchTerm = ref('');
const loading = ref(false);

const sizes = ['small', 'medium', 'large'];

const getGridItemClass = (index) => {
  if (index === 0) return 'small'; // First item is normal size
  if (index === 1) return 'large'; // Second item is large
  if (index === 2) return 'medium'; // Third item is medium
  if (index === 3) return 'large'; // Third item is medium
  if (index === 4) return 'medium'; // Third item is medium
  if (index === 5) return 'medium'; // Third item is medium

  // Randomly select a size from the sizes array
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};

const fetchPhotos = async () => {
  try {
    loading.value = true;
    const params = {
      per_page: 7,
    };
    const data = await FetchPhotoService.fetchPhotos(params);
    console.log(data);
    console.log(data.length);
    photos.value = data;
    console.log(photos.value);
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};

const fetchSearchPhotos = async () => {
  try {
    loading.value = true;
    const params = {
      query: searchTerm.value,
      per_page: 7,
    };
    const data = await FetchPhotoService.fetchSearchPhotos(params);
    console.log(data);
    console.log(data.length);
    photos.value = data.results;
    loading.value = false;
    console.log(photos.value);
  } catch (error) {
    loading.value = false;
  }
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleOpenModal = (image) => {
  console.log(image);
  isModalOpen.value = true;
  photoDetails.value = image;
};

watch(searchTerm, (newValue) => {
  if (newValue === '') {
    fetchPhotos(); // Fetch default photos when searchTerm is empty
  }
});

onMounted(() => {
  fetchPhotos();
});
</script>

<style lang="scss" scoped>
/* Header styling */
.header {
  background-color: #dce3ea;
  padding: 13rem 15rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 10rem 10rem;
  }

  @media (max-width: 768px) {
    padding: 8rem 5rem;
  }

  @media (max-width: 480px) {
    padding: 6rem 2rem;
  }
}

.search-field {
  position: relative;

  &:before {
    background-image: url('@/assets/icons/search.svg');
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 2rem;
    left: 32px;
    position: absolute;
    top: 38%;
    width: 1.5rem;
    z-index: 6;

    @media (max-width: 768px) {
      left: 10px;
      top: 34%;
    }

    @media (max-width: 480px) {
      left: 10px;
      top: 34%;
    }
  }

  &__input {
    background-color: rgb(255 255 255);
    border: 1px solid rgba(10, 46, 101, 0.1);
    border-radius: 0.75rem;
    box-shadow: 2px 20px 12px -9px #0a2e6508;
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    outline-color: #6c82a333;
    padding: 2rem 5rem 2rem 7rem;
    width: 100%;
    z-index: 5;

    &::placeholder {
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding: 1.5rem 4rem 1.5rem 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
      padding: 1.2rem 3rem 1.2rem 4rem;
    }
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 10px;
  grid-gap: 30px 30px;
  padding: 20px;
  margin: 0 auto;
  margin-top: -80px;
  position: relative;
  z-index: 5;
  width: 80%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-gap: 32px 48px;
    width: 90%;
    margin-top: -50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-gap: 24px 32px;
    width: 95%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 16px 24px;
    width: 100%;
  }

  .gallery-item {
    overflow: hidden;
    position: relative;
    grid-column: span 4;
    border-radius: 0.75rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 1024px) {
      grid-column: span 12;
      grid-row: span 12;
    }

    @media (max-width: 768px) {
      grid-column: span 12;
      grid-row: span 12;
    }
  }
}

.small {
  grid-row: span 8;

  @media (max-width: 1024px) {
    grid-row: span 6;
  }

  @media (max-width: 768px) {
    grid-row: span 5;
  }

  @media (max-width: 480px) {
    grid-row: span 4;
  }
}

.large {
  grid-row: span 10;

  @media (max-width: 1024px) {
    grid-row: span 8;
  }

  @media (max-width: 768px) {
    grid-row: span 6;
  }

  @media (max-width: 480px) {
    grid-row: span 5;
  }
}

.medium {
  grid-row: span 9;

  @media (max-width: 1024px) {
    grid-row: span 7;
  }

  @media (max-width: 768px) {
    grid-row: span 6;
  }

  @media (max-width: 480px) {
    grid-row: span 5;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
