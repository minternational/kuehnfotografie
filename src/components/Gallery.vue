<template>
  <div class="fashion">
    <img
      loading="lazy"
      class="m-2 rounded-md"
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
img {
  max-width: 95%;
}
</style>
