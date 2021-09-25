<template>
  <div class="about mb-12 text-justify max-w-2xl mx-auto">
    <img class="mt-6 mb-8 mx-auto" src="@/assets/circle-me.png" alt="profile" />
    <div v-for="(item, id) in about" :key="id">
      <p>{{ item.content }}</p>
      <ul v-for="i in item.references.length" :key="i">
        <li>{{ item.references[i - 1] }}</li>
      </ul>
      <br />
      <br />
      <ul v-for="i in item.details.length" :key="i">
        <li>{{ item.details[i - 1] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [],
      details: [],
    };
  },
  mounted() {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        const { about, details } = data;
        this.about = about;
        this.details = details;
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

.about {
  width: 90%;
}
</style>
