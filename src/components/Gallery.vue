<template>
  <div>
    {{ galleryName }}
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      galleryName: "",
    };
  },
  mounted() {
    this.getGalleryPath();
  },
  methods: {
    getGalleryPath() {
      console.log(document.location.hash);
      this.galleryName = document.location.hash;
    },
  },
};
</script>

<style scoped>
.masonry-with-columns {
  columns: 3 200px;
  column-gap: 1rem;
}
</style>

<!--

    v-for="(item, id) in imageItems"
    :key="id"
    class="fashion masonry-with-columns"
  >
    <h1>{{ item.name }}</h1




<img
      loading="lazy"
      class="m-2 rounded-md"
      v-for="i in 50"
      :src="`https://www.crmk.de/kuehnfotografie/images/liebe/0${i}.jpg`"
      :key="i"
      alt="Mode"
    />

-->
