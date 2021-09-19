<template>
  <div class="about text-justify max-w-2xl mx-auto">
    <img class="mb-8 mx-auto" src="@/assets/circle-me.png" alt="profile" />
    <div v-for="(item, id) in about" :key="id">
      <p>{{ item.content }}</p>
      <ul v-for="i in item.references.length" :key="i">
        <li>{{ item.references[i - 1] }}</li>
      </ul>
      <br />
      <br />
      <ul v-for="i in item.impressum.length" :key="i">
        <li>{{ item.impressum[i - 1] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [],
      impressum: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        const { about, impressum } = data;
        this.about = about;
        this.impressum = impressum;
      });
  },
};
</script>

<style scoped>
img {
  max-width: 15rem;
}

p {
  white-space: pre-line;
}
</style>
