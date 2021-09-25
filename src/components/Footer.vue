<template>
  <div class="inline-block" v-for="(item, id) in footerItems" :key="id">
    <ul class="pt-12 pb-6">
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

<!--

<a
      class="
        border-transparent
        text-gray-500
        border-b
        hover:text-black hover:border-gray-500
        transform
        transition
        duration-200
        ease-in-out
        m-3
        p-3
      "
      href="mailto:kontakt@kuehnfotografie.de"
      ><i class="fas fa-envelope"></i> E-Mail
    </a>
    <a
      class="
        border-transparent
        text-gray-500
        border-b
        hover:text-black hover:border-gray-500
        transform
        transition
        duration-200
        ease-in-out
        m-3
        p-3
      "
      href="callto:+4915732620558"
    >
      <i class="fas fa-phone-square-alt"></i> Telefon
    </a>
    <router-link to="/impressum"
      ><a
        class="
          border-transparent
          text-gray-500
          border-b
          hover:text-black hover:border-gray-500
          transform
          transition
          duration-200
          ease-in-out
          m-3
          p-3
        "
        href="impressum.html"
      >
        <i class="fas fa-info"></i>
        Impressum
      </a>
    </router-link>

-->
