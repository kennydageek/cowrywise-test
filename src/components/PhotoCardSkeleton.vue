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
  background-color: #f6f6f6;
}

.skeleton-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f6f6f6;
  border-radius: 0.75rem;
}

.skeleton-photographer {
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
  z-index: 100;
}

.skeleton-text {
  height: 1.8rem;

  margin-bottom: 0.5rem;
  border-radius: 4px;
  animation: skeleton-loading 1.5s infinite;
}

.name {
  width: 200px;
}

.location {
  width: 150px;
}

@keyframes skeleton-loading {
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
