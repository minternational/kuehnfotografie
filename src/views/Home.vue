<template>
  <div class="flex flex-wrap justify-center">
    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
};
</script>
