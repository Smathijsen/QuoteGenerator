<template>
  <!-- Uses vue-social-sharing 
  To connect to various social media platforms-->
  <div>
    <social-sharing
      url
      :title="quote"
      :description="quote"
      :quote="quote"
      hashtags="quotes, inspirational, awesome quotes, quote generator"
      twitter-user
      inline-template
    >
      <!-- Various social media icons + link to platform -->
      <div>
        <network network="facebook">
          <i class="scl-btn scl-rnd shadow fab fa-facebook-f"></i>
        </network>

        <network network="linkedin">
          <i class="scl-btn scl-rnd shadow fab fa-linkedin-in"></i>
        </network>

        <network network="twitter">
          <i class="scl-btn scl-rnd shadow fab fa-twitter"></i>
        </network>

        <network network="reddit">
          <i class="scl-btn scl-rnd shadow fab fa-reddit-alien"></i>
        </network>

        <network network="whatsapp">
          <i class="scl-btn scl-rnd shadow fab fa-whatsapp"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  // Property that can be set from outside of component
  props: ["quote"]
};
</script>

<style>
/**Styling for the social media buttons from 
https://smartlazycoding.com/bootstrap-tutorial/social-media-share-buttons-font-awesome-css-bootstrap */

/* Social Button */
.scl-btn {
  padding: 15px;
  font-size: 25px;
  width: 55px;
  text-align: center;
  text-decoration: none;
  margin: 5px;
  color: white;
}
/* Hover Effect */
.scl-btn:hover {
  opacity: 0.8;
  text-align: center;
  text-decoration: none;
  color: white;
}
/* Round buttons */
.scl-crcl {
  border-radius: 50%;
}
/* Round Corners */
.scl-rnd {
  border-radius: 5px;
}

/* Brand Colors */
.fa-facebook-f {
  background: #3b5998;
}
.fa-linkedin-in {
  background: #007bb5;
}
.fa-twitter {
  background: #55acee;
}
.fa-reddit-alien {
  background: #ff5700;
}
.fa-whatsapp {
  background: #25d366;
}
</style>