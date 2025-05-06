
<template>
  <section class="hero">
    <video autoplay muted loop playsinline preload="auto" poster= "/src/assets/poster.jpg"class="hero-video">
      <source src="/Couverture.light.mp4" type="video/mp4" />
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

import { onMounted } from 'vue';

export default {
  name: 'HeroSection',
  setup() {
    /* modifications performances */
    onMounted(() => {
      const logo = document.querySelector('.hero-logo');
      if (logo) {
        setTimeout(() => {
          logo.classList.add('after-load');
        }, 2200); // après le LCP (2,2 sec)
      }
    });
  }
};

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  position: relative;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
  filter: grayscale(100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 1.2rem;
  width: 100%;
  max-width: 100%;
}

/* Logo responsive */
.hero-logo {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-logo span {
  display: inline-block;
  opacity: 1;
  transform: none;
}

.hero-logo span:nth-child(1) { animation-delay: 0.2s; }
.hero-logo span:nth-child(2) { animation-delay: 0.4s; }
.hero-logo span:nth-child(3) { animation-delay: 0.6s; }
.hero-logo span:nth-child(4) { animation-delay: 0.8s; }
.hero-logo span:nth-child(5) { animation-delay: 1s; }

.hero-slogan {
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: bold;
  color: #cccccc;
  opacity: 0;
  animation: fadeInSlogan 1s forwards;
  animation-delay: 1.4s;
  margin-bottom: 2rem;
}

/* Animations */
@keyframes fadeInSlogan {
  to {
    opacity: 1;
  }
}

.hero-logo.after-load {
  animation: pulse 1.8s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

/* Mobile-specific adjustments */
@media screen and (max-width: 480px) {
  .hero {
    align-items: flex-start;
    padding-top: 20vh;
  }

  .hero-slogan {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  .hero-logo {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }

  .hero-content {
    padding: 0 1rem;
  }
}
</style>
