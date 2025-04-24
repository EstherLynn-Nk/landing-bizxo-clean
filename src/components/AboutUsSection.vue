<template>
  <section class="about-section">
    <div class="section-number">04.</div>
    <!-- MOT À LA FOIS -->
    <div class="word-zone">
      <transition name="fade-word" mode="out-in">
        <h1 :key="currentWord" class="value-word">
          {{ currentWord.toUpperCase() }}.
        </h1>
      </transition>
    </div>

    <!-- OVERVIEW -->
    <div class="overview-section">
      <div class="overview-content">
        <h2 class="overview-title">About BizXO</h2>
        <p class="overview-text">
          Bizxo Services provides high-quality expertise on an “as-needed” basis to help tech organizations transform and thrive.
          Our team of seasoned technology leaders brings a wealth of knowledge and experience to deliver strategic and tactical solutions in
          General Management, Change Management, Project/Program Oversight, Information Management, Compliance Management,
          Board governance, and Engagement Management.
          We understand that every organization has unique needs, and our tailored approach ensures you receive the precise support necessary
          to achieve your goals and reap the benefits for your organization.
        </p>
        <div class="hourglass-wrapper">
  <div class="hourglass"></div>
  <p class="coming-text">
    Our website is under construction — the full BizXO experience is coming soon.
  </p>
</div>

      
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBizXO",
  data() {
    return {
      words: [
        "Integrity",
        "Innovation",
        "Clarity",
        "Expertise",
        "Leadership",
        "Trust"
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentWord() {
      return this.words[this.currentIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
    }, 3000);
  }
};
</script>

<style scoped>
.about-section {
  background-color: #000;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.word-zone {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.value-word {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: white;
  transition: opacity 0.6s ease;
}

.fade-word-enter-active,
.fade-word-leave-active {
  transition: opacity 0.8s ease;
}
.fade-word-enter-from,
.fade-word-leave-to {
  opacity: 0;
}

.overview-section {
  max-width: 800px;
  margin: 0 auto;
}

.overview-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #e0cba8;
}

.overview-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ddd;
  text-align: center;
}
.hourglass-wrapper {
  background: #000;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.coming-text {
  margin-top: 2rem;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: #e0e0e0;
}

/* SABLIER */
.hourglass {
  width: 40px;
  height: 60px;
  border: 4px solid #e0cba8;
  border-radius: 4px;
  position: relative;
  animation: flip 2s infinite ease-in-out;
  box-sizing: border-box;
}

.hourglass::before,
.hourglass::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-color: #e0cba8 transparent;
}

.hourglass::before {
  top: 8px;
  border-width: 12px 10px 0 10px;
}

.hourglass::after {
  bottom: 8px;
  border-width: 0 10px 12px 10px;
}

@keyframes flip {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.section-number {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  animation: fadeIn 1s ease forwards;
}

</style>
