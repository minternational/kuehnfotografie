<template>
  <div v-for="(item, id) in categorieCards" :key="id">
    <router-link :to="item.route">
      <div class="footer p-4 capitalize">
        <div
          id="cards"
          class="
            border
            shadow-md
            opacity-80
            hover:opacity-100
            hover:shadow-xl
            hover:border-transparent
            hover:text-black
            transform
            transition
            duration-200
            ease-in-out
            rounded-lg
            w-80
            m-4
            cursor-pointer
            overflow-hidden
            relative
          "
        >
          <img
            loading="lazy"
            class="
              mx-auto
              rounded-t
              filter
              transform
              hover:scale-105
              transition
              duration-200
              ease-in-out
              h-56
              w-80
              relative
              object-cover
            "
            :src="item.img"
            :alt="item.img"
          />

          <h2
            class="
              w-full
              text-left text-xl
              absolute
              pb-1
              pl-3
              pt-10
              bottom-0
              text-white
            "
          >
            {{ item.name }}
          </h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Cards",
  component: Gallery,
  data() {
    return {
      categorieCards: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => (this.categorieCards = data.cards));
  },
};
</script>

<style scoped>
h2 {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
