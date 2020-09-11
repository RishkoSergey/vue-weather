<template>
  <div>
    <img :src="getImage" />
  </div>
</template>

<script>
export default {
  props: ['weather'],
  computed: {
    getImage: function() {
      return require(`../assets/${this.weather.weather[0].main.toLowerCase()}.png`);
    }
  }
}
</script>