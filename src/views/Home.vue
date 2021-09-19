<template>
  <div class="flex flex-wrap justify-center">
    <Cards :categorie-cards="categorieItems" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
  data() {
    return {
      categorieItems: [
        {
          id: 1,
          name: "reisen",
          img: "https://www.crmk.de/kuehnfotografie/images/cover/travel.jpg",
          route: "/travel",
        },
        {
          id: 2,
          name: "portrait",
          img: "https://www.crmk.de/kuehnfotografie/images/cover/portrait.jpg",
          route: "/portrait",
        },
        {
          id: 3,
          name: "mode",
          img: "https://www.crmk.de/kuehnfotografie/images/cover/fashion.jpg",
          route: "/fashion",
        },
        {
          id: 4,
          name: "liebe",
          img: "https://www.crmk.de/kuehnfotografie/images/cover/hochzeit.jpg",
          route: "/love",
        },
      ],
    };
  },
};
</script>
