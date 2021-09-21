<template>
  <div class="text-justify max-w-2xl mx-auto">
    <p>{{ impressum.content }}</p>
  </div>
</template>

<script>
export default {
  name: "Impressum",
  data() {
    return {
      impressum: "",
    };
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => (this.impressum = data.impressum[0]));
  },
};
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
