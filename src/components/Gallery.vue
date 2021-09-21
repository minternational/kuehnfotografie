<template>
  <div class="masonry-with-columns mx-auto mt-12">
    <img
      loading="lazy"
      class="lazyload rounded-lg mb-5"
      v-for="i in 47"
      :src="`https://www.crmk.de/kuehnfotografie/images/${destinationId}/0${i}.jpg`"
      :key="i"
      :alt="{ destinationId }"
    />
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      destinationId: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.masonry-with-columns {
  columns: 3 200px;
  column-gap: 1rem;
}
</style>
