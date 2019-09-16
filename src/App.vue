<template>
  <div class="container">
    <div id="fb-root"></div>
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <p slot="quote">{{results.data.quote}}</p>
          <p slot="author">- {{results.data.author}}</p>
        </app-quote>
        <social-media :quote="results.data.quote"></social-media>
      </div>
    </div>
  </div>
</template>


<script>
import Quote from "./components/Quote";
import SocialMedia from "./components/SocialMedia";

export default {
  props: ["results"],

  //Function to get random quote from API
  mounted() {
    axios
      .get("http://quotes.stormconsultancy.co.uk/quotes/random.json")
      .then(response => (this.results = response));
  },

  components: {
    "app-quote": Quote,
    "social-media": SocialMedia
  }
};
</script>


<style>
body {
  background-image: url("./assets/background.jpg");
}
</style>
