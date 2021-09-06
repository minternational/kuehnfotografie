<template>
  <div v-for="(item, id) in cardItems" :key="id">
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
        <div class="footer p-4">
          <h1>{{ item.text }}</h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data: () => ({
    cardItems: [
      {
        id: 1,
        text: "Reisen",
        img: "https://www.crmk.de/kuehnfotografie/images/cover/travel.jpg",
        route: "/travel",
      },
      {
        id: 2,
        text: "Portrait",
        img: "https://www.crmk.de/kuehnfotografie/images/cover/portrait.jpg",
        route: "/portrait",
      },
      {
        id: 3,
        text: "Mode",
        img: "https://www.crmk.de/kuehnfotografie/images/cover/fashion.jpg",
        route: "/fashion",
      },
      {
        id: 4,
        text: "Liebe",
        img: "https://www.crmk.de/kuehnfotografie/images/cover/hochzeit.jpg",
        route: "/love",
      },
    ],
  }),
};
</script>
