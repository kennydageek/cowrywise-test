<template>
  <div class="container">
    <img
      :src="item?.urls?.thumb"
      v-bind:src="item?.urls?.regular"
      class="container__image"
      loading="lazy"
      :alt="item.alt_description"
      sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1000px"
      :srcset="
        item?.urls?.thumb +
        ' 320w, ' +
        item?.urls?.small +
        ' 640w, ' +
        item?.urls?.regular +
        ' 1080w'
      "
    />

    <div class="photographer">
      <p class="photographer__name">{{ item?.user?.name }}</p>
      <p class="photograper__country">{{ item?.user?.location }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
console.log(props);
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  //   width: 30rem;
  height: 100%;
  //   border-radius: 0.75rem;
  position: relative; /* Ensure relative positioning for overlay */

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
    border-radius: 0.75rem;
    aspect-ratio: 16/9;
  }

  .photographer {
    position: absolute;
    left: 2.5rem;
    bottom: 2.5rem;
    color: #fff;
    z-index: 10000;
    &__name {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  /* Dark overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    border-radius: 0.75rem;
  }
}
</style>
