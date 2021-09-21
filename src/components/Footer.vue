<template>
  <div class="footer p-12">
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
  </div>
</template>

<script>
import Impressum from "@/components/Impressum.vue";

export default {
  name: "Footer",
  components: Impressum,
};
</script>

<style scoped>
a {
  font-weight: 500;
}
</style>
