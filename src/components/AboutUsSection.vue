<template>
  <section class="about-section">
    <div class="section-number">02.</div>

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
          Bizxo Services offers executive-level expertise on an "as-needed " basis to help technology organizations grow, evolve, and succeed. Our team of seasoned technology leaders delivers strategic and hands-on solutions in General Management, Information Management, and Corporate Governance.
          We recognize that every organization is unique. That’s why we tailor our approach to provide the support you need, ensuring measurable results, target benefits, and long-term value
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
        "Flexibility",
        "Leadership",
        "Expertise",
        "Cost Efficiency",
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
  background-color: rgb(41, 40, 40);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-number {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  animation: fadeIn 1s ease forwards;
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
  padding: 0 1rem;
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

/* Responsive Design */
@media screen and (max-width: 768px) {
  .about-section {
    padding: 4rem 1rem;
  }

  .word-zone {
    height: auto;
    margin-bottom: 2rem;
  }

  .value-word {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }

  .overview-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .overview-text {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
  }
}
</style>
