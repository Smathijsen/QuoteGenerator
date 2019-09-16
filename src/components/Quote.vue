<template>
  <div>
    <div class="quote">
      <!-- {{results.data.quote}} -->
      <slot name="quote"></slot>
    </div>
    <div class="author">
      <!-- {{results.data.author}} -->
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //Function to get random quote from API
  //   mounted() {
  //     axios
  //       .get("http://quotes.stormconsultancy.co.uk/quotes/random.json")
  //       .then(response => (this.results = response));
  //   },
};
</script>

<style scoped>
div {
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.quote {
  font-style: italic;
  color: white;
  font-size: 30px;
}

.author {
  color: white;
  font-size: 30px;
}
</style>