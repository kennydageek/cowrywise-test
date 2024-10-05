<script setup>
import HeaderSearch from '@/components/HeaderSearch.vue';
</script>

<template>
  <main>
    <header class="header">
      <div class="w-full xl:w-2/4">
        <form action="/search" method="get">
          <div
            class="search-field"
            style="
              translate: none;
              rotate: none;
              scale: none;
              opacity: 1;
              transform: translate(0px, 0px);
            "
          >
            <input
              type="text"
              name="s"
              placeholder="Enter keyword. eg: Portfolio"
            />
          </div>
        </form>
      </div>
    </header>
  </main>
</template>

<style lang="scss" scoped>
.header {
  background-color: #dce3ea;
  padding: 10rem 15rem;

  .search-field:before {
    background-image: url(./search.e49426ad.svg);
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 1.5rem;
    left: 32px;
    position: absolute;
    top: 40%;
    width: 1.5rem;
    z-index: 6;
  }
}
</style>
