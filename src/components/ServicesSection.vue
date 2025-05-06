<template>
  <section class="services-section" ref="section">
    <div class="intro-block">
      <div class="section-number">01.</div>
      <h2 class="intro-title">Our Services</h2>
      <div class="underline"></div>
      <p class="intro-text">
        At BizXO, we offer <span class="highlighted">executive-level</span> support across
        three essential areas — built to <span class="pulse-word">transform</span> your organization.
      </p>
      <button @click="scrollToServices" class="cta-arrow">
        <span>&#8595;</span>
      </button>
    </div>

    <div class="services-grid" ref="servicesGrid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card fade-slide"
        :style="{ transitionDelay: `${index * 0.2}s` }"
      >
        <div class="service-image-wrapper">
          <img :src="service.image" :alt="service.title" class="service-image" />

        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import generalImage from '@/assets/GeneralManagement.jpg';
import boardImage from '@/assets/BoardAdvisory.jpg';
import infoImage from '@/assets/InformationManagement.jpg';

export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'General Management',
          image: generalImage,
          tag: 'Leadership',
          description: 'Our Fractional General Managers are seasoned executives who provide strategic leadership and operational excellence to guide organizations through transitions and growth. Whether for interim needs or ongoing support, they help navigate challenges and drive sustainable success.'
        },
        {
          title: 'Board Advisory and Governance',
          image: boardImage,
          tag: 'Governance',
          description: 'We provide independent board advisory and strategic oversight to help companies strengthen governance, manage risk, and scale with confidence. Our seasoned experts bring deep experience in compliance, corporate strategy, and investor relations to support sustainable growth.'
        },
        {
          title: 'Information Management',
          image: infoImage,
          tag: 'Clarity',
          description: 'In today’s digital age, having the right strategy to manage information assets. Our fractional CIO and CISO services provide you with experienced IT leadership to drive innovation, optimize technology investments, and enhance your capabilities without the cost of a full-time executive.'
        }
      ]
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = this.$el.querySelectorAll('.fade-slide');
    elements.forEach((el) => observer.observe(el));
  },
  methods: {
    scrollToServices() {
      const grid = this.$refs.servicesGrid;
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>
<style scoped>
.services-section {
  background: linear-gradient(-45deg, #111, #333, #111);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  color: #fff;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  text-align: center;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.section-number {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  animation: fadeIn 1s ease forwards;
}

.intro-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeIn 1s 0.5s ease forwards;
}

.underline {
  height: 3px;
  width: 80px;
  background: #aaa;
  margin: 0 auto 1.5rem;
  animation: growLine 0.5s ease-out forwards;
}

@keyframes growLine {
  from { width: 0; }
  to { width: 80px; }
}

.intro-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: #ddd;
}

.highlighted {
  color: #fff;
  font-weight: bold;
}

.pulse-word {
  animation: pulse 2s infinite;
  color: #c0c0c0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.cta-arrow {
  font-size: 2.2rem;
  background: none;
  border: none;
  color: #fff;
  margin-top: 2rem;
  cursor: pointer;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.services-grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.service-card {
  background-color: #f3f0ed;;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 300px;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
  color: #000;
}

.service-card.show {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.07);
}

.service-image-wrapper {
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 1rem;
}

.service-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}



.service-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1rem;
  color: #000000;
}

@keyframes fadeIn {
  to { opacity: 1; transform: translateY(0); }
}
</style>
