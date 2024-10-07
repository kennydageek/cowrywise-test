<template>
  <div class="skeleton-card">
    <div class="skeleton-image"></div>
    <div class="skeleton-photographer">
      <div class="skeleton-text name"></div>
      <div class="skeleton-text location"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  height: 100%;
  position: relative;
  border-radius: 0.75rem;
  background-color: #f6f6f6; /* Light background to simulate skeleton effect */
}

.skeleton-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f6f6f6; /* Gray placeholder for the image */
  border-radius: 0.75rem;
  /* animation: skeleton-loading 1.5s infinite; */
}

.skeleton-photographer {
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
  z-index: 100;
  /* background: red; */
}

.skeleton-text {
  /* width: 100px; */
  height: 1.8rem;
  /* background-color: #e7e7e7; Gray placeholder for the text */
  /* Gray placeholder for the text */

  margin-bottom: 0.5rem;
  border-radius: 4px;
  animation: skeleton-text-loading 1.5s infinite;
}

.name {
  width: 200px;
}

.location {
  width: 150px;
}

@keyframes skeleton-loading {
  0% {
    background-color: #e7e7e7;
  }
  50% {
    background-color: #f6f6f6;
  }
  100% {
    background-color: #e7e7e7;
  }
}

@keyframes skeleton-text-loading {
  0% {
    background-color: #f6f6f6;
  }
  50% {
    background-color: #e7e7e7;
  }
  100% {
    background-color: #f6f6f6;
  }
}
</style>
