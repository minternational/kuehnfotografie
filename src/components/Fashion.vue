<template>
  <div class="fashion masonry-with-columns">
    <img
      loading="lazy"
      class="m-2 rounded-md"
      v-for="i in 50"
      :src="`https://www.crmk.de/kuehnfotografie/images/fashion/0${i}.jpg`"
      :key="i"
      alt="Mode"
    />
  </div>
</template>

<script>
export default {
  name: "Fashion",
};
</script>

<style scoped>
.masonry-with-columns {
  columns: 3 200px;
  column-gap: 1rem;
}
img {
  z-index: 1;
}
</style>
