<template>
           <social-sharing url=""
                      title="Awesome quote"
                      description="Awesome quote"
                      quote="Awesome quote"
                      hashtags="quotes, inspirational, awesome quotes, quote generator"
                      twitter-user=""
                      inline-template>
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
</template>

<script>
  export default {

  }

</script>

<style>
    /* Social Button Stype */
    .scl-btn {
      padding: 15px;
      font-size: 25px;
      width: 55px;
      text-align: center;
      text-decoration: none;
      margin:5px;
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
        border-radius:5px;
    }

    /* Brand Colors */
    .fa-facebook-f { background: #3B5998; }
    .fa-twitter { background: #55ACEE; }
    .fa-linkedin-in { background: #007bb5; }
    .fa-whatsapp { background: #25D366; }
    .fa-reddit-alien { background: #ff5700; }
</style>