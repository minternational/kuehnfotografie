<template>
  <div class="impressum mb-12 text-justify max-w-2xl mx-auto">
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
* {
  font-weight: 500;
}

p {
  white-space: pre-line;
}

.impressum {
  width: 90%;
}
</style>
