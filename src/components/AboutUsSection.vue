<template>
  <section class="about-section">
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
</style>
