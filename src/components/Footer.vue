<template>
  <div
    class="sm:inline-block sm:object-center sm:w-40"
    v-for="(item, id) in footerItems"
    :key="id"
  >
    <ul class="sm:pt-12 sm:pb-6 pt-6">
      <a
        class="
          border-transparent
          hover:text-black
          text-gray-500
          m-6
          p-2
          hover:border-gray-500
          border-b
          transform
          transition
          duration-200
          ease-in-out
          w-32
        "
        :href="item.link"
      >
        <i :class="item.icon"></i> {{ item.name }}
      </a>
    </ul>
  </div>
</template>

<script>
import Impressum from "@/components/Impressum.vue";

export default {
  name: "Footer",
  components: Impressum,
  data() {
    return {
      footerItems: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => (this.footerItems = data.footer));
  },
};
</script>
