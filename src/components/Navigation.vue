<template>
  <div
    class="inline-block md:w-1/4 w-40"
    v-for="(item, id) in navigationItems"
    :key="id"
  >
    <ul class="py-6">
      <router-link :to="item.route">
        <a
          class="
            border-transparent
            hover:text-black
            text-gray-500
            m-6
            hover:border-gray-500
            border-b
            transform
            transition
            duration-200
            ease-in-out
            w-32
            md:text-xl
            text-base
          "
        >
          {{ item.text }}
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navigationItems: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => (this.navigationItems = data.navigation));
  },
};
</script>

<style scoped>
* {
  font-weight: 500;
}
</style>
