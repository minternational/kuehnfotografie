<template>
  <div v-for="(item, id) in categorieCards" :key="id">
    <router-link :to="item.route">
      <div
        id="cards"
        class="
          border
          shadow-md
          hover:shadow-xl
          hover:scale-105
          hover:border-transparent
          hover:text-black
          transform
          transition
          duration-200
          ease-in-out
          rounded-lg
          w-80
          m-6
          cursor-pointer
        "
      >
        <img
          loading="lazy"
          class="
            mx-auto
            rounded-t
            filter
            opacity-80
            hover:opacity-100
            transform
            transition
            duration-200
            ease-in-out
            h-56
            w-80
          "
          :src="item.img"
        />
        <div class="footer p-4 capitalize">
          <h1>{{ item.name }}</h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: "Cards",
  component: Category,
  data() {
    return {
      categorieCards: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => (this.categorieCards = data.cards));
  },
};
</script>
