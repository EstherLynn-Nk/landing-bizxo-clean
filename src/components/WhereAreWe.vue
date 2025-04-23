<template>
  <section class="where-we-are">
    <div class="header">
      <div class="section-number">02.</div>
      <h2 ref="titleRef" class="title fade-in"><span class="underline-text">Our Global Footprint</span> </h2>
      <p ref="typedSubtitle" class="subtitle typewriter-text"></p>
    </div>

    <div class="map-wrapper">
      <div class="map-image"></div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: "WhereWeAre",
  setup() {
    const titleRef = ref(null);
    const typedSubtitle = ref(null);
    const subtitleText = "BizXO supports global leadership and transformation initiatives across 4 key regions.";
    let hasTyped = false;

    const typeWriter = () => {
      const el = typedSubtitle.value;
      let i = 0;
      el.innerHTML = "";
      const interval = setInterval(() => {
        el.innerHTML += subtitleText[i];
        i++;
        if (i >= subtitleText.length) clearInterval(interval);
      }, 30);
    };

    onMounted(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          titleRef.value.classList.add("visible");
          setTimeout(typeWriter, 600); // lancer le typewriter après le fade-in
          hasTyped = true;
        }
      }, { threshold: 0.6 });

      if (titleRef.value) {
        observer.observe(titleRef.value);
      }
    });

    return { titleRef, typedSubtitle };
  }
};
</script>

<style scoped>
.where-we-are {
  background-color: #111;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.header {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
}

/* Fade-in Titre */
.title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.title.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Typewriter Subtitle */
.subtitle {
  font-size: 1.2rem;
  color: #cccccc;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid rgba(255,255,255,0.6);
  width: fit-content;
  margin: 0 auto;
  animation: blink-caret 0.8s step-end infinite;
}

@keyframes blink-caret {
  0%, 100% { border-color: transparent; }
  50% { border-color: rgba(255,255,255,0.6); }
}

/* Carte animée */
.map-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}

.map-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-image: url('@/assets/cartebizxo.png');
  background-size: cover;
  background-position: center;
  animation: driftZoom 8s ease-in-out infinite alternate;
  filter: brightness(0.6);
}

@keyframes driftZoom {
  0% {
    transform: scale(1) translateY(0px);
  }
  100% {
    transform: scale(1.08) translateY(-20px);
  }
}
/* Titre avec underline stylisée */
.with-underline {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  position: relative;
}

.with-underline.visible {
  opacity: 1;
  transform: translateY(0);
}

.underline-text {
  position: relative;
  display: inline-block;
}

.underline-text::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0cba8, #ffffff);
  transform: translateX(-50%) scaleX(1);
  background-size: 200% 100%;
  animation: underline-shine 3s linear infinite;
}

@keyframes underline-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.section-number {
  font-size: 1.3rem;
  font-weight: 500;
  color: #e9dfdf;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

</style>
