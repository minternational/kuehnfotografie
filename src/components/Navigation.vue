<template>
  <div id="wrapper" class="grid justify-items-center">
    <ul>
      <button
        class="
          border-transparent
          hover:text-black
          text-gray-500
          mt-6
          mb-6
          mr-6
          ml-6
          p-2
          hover:border-gray-500
          border-b
          transform
          transition
          duration-200
          ease-in-out
          w-24
        "
        v-for="(item, id) in navigationItems"
        :key="id"
      >
        <router-link :to="item.route">{{ item.text }}</router-link>
      </button>
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
      .then(res => res.json())
      .then(data => (this.navigationItems = data.navigation));
  },
};
</script>

<style scoped>
* {
  font-weight: 500;
}
</style>
