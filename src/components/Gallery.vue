<template>
  <div class="fashion masonry-with-columns">
    <img
      loading="lazy"
      class="m-2 rounded-md"
      v-for="i in 47"
      :src="`https://www.crmk.de/kuehnfotografie/images/${this.$route.params.id}/0${i}.jpg`"
      :key="i"
      alt="Mode"
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
