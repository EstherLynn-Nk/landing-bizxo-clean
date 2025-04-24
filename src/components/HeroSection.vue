
<template>
  <section class="hero">
    <video autoplay muted loop class="hero-video">
      <source src="/couverture.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>

    <div class="hero-content">
      <h1 class="hero-logo">
        <span>B</span><span>i</span><span>z</span><span>X</span><span>O</span>
      </h1>

      <p class="hero-slogan">Fractional Management Services : We fill the gap !</p>

    </div>
    
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.right-align {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  text-align: right;
  max-width: 90%;
}




.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.hero-video {
  top:0;
  left:0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
  filter: grayscale(100%) opacity(10);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 20px;
}
/* 
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
} */




  .hero-logo {
  font-size: clamp(4rem, 12vw, 10rem) !important;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.25rem;
  display: inline-block;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}



.hero-logo span {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: logoFadeIn 0.6s forwards;
}

.hero-logo span:nth-child(1) { animation-delay: 0.2s; }
.hero-logo span:nth-child(2) { animation-delay: 0.4s; }
.hero-logo span:nth-child(3) { animation-delay: 0.6s; }
.hero-logo span:nth-child(4) { animation-delay: 0.8s; }
.hero-logo span:nth-child(5) { animation-delay: 1s; }

.hero-slogan {
  font-size: 1.3rem;
  color: #cccccc;
  opacity: 0;
  animation: fadeInSlogan 1s forwards;
  animation-delay: 1.4s;
  margin-bottom: 2rem;
}

@keyframes logoFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInSlogan {
  to {
    opacity: 1;
  }
}

</style>

<!-- 
   <template>
    <div style="background-color: pink; padding: 50px;">
      <h1>TEST HERO SECTION</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  };
  </script> -->
  <!-- good job -->