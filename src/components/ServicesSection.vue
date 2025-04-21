<!-- <template>
  <section class="services-section">
    <h2 class="section-title">Nos Services</h2>
    <div class="services-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <img :src="require(`@/assets/${service.image}`)" :alt="service.title" />
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          title: "General Management",
          image: "GeneralManagement.jpg", // Mets ici le nom exact de ton image
          description:
            "Supervision stratégique, leadership organisationnel et gestion des opérations au plus haut niveau.",
        },
        {
          title: "Board Advisory Governance",
          image: "BoardAdvisory.jpg",
          description:
            "Accompagnement des conseils d’administration pour des décisions éclairées et une gouvernance solide.",
        },
        {
          title: "Information Management",
          image: "InformationManagement.jpg",
          description:
            "Organisation, sécurisation et valorisation des données pour une prise de décision optimisée.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-section {
  background-color: #ffffff;
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #111;
  font-weight: 600;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 0 10px;
}

.service-card {
  background-color: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
}

.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: grayscale(100%);
}

.service-content {
  padding: 20px;
  color: #333;
  background-color: #fff;
}

.service-content h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  color: #111;
}

.service-content p {
  font-size: 1rem;
  color: #666;
}
</style> -->

<!-- <template>
  <section class="services-section">
    <h2 class="section-title">Nos Services</h2>
    <div class="services-grid">
      <div
        class="service-card"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          title: "General Management",
          description:
            "Supervision stratégique, leadership organisationnel et gestion des opérations au plus haut niveau.",
        },
        {
          title: "Board Advisory Governance",
          description:
            "Accompagnement des conseils d’administration pour des décisions éclairées et une gouvernance solide.",
        },
        {
          title: "Information Management",
          description:
            "Organisation, sécurisation et valorisation des données pour une prise de décision optimisée.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-section {
  background-color: #ffffff;
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #111;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-content h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #222;
}

.service-content p {
  font-size: 1rem;
  color: #555;
}
</style> -->


<!-- <template>
  <section class="services-section">
    <h2 class="section-title">Nos Services</h2>
    <div class="services-grid">
      <div v-for="(service, index) in services" :key="index" class="service-card fade-slide"
      :style="{transitionDelay :  `${index * 0.8}s`}">
        <img :src="service.image" :alt="service.title" class="service-image" />
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
          description:
            'Supervision stratégique, leadership organisationnel et gestion des opérations au plus haut niveau.',
        },
        {
          title: 'Board Advisory Governance',
          image: boardImage,
          description:
            'Accompagnement des conseils d’administration pour des décisions éclairées et une gouvernance solide.',
        },
        {
          title: 'Information Management',
          image: infoImage,
          description:
            'Organisation, sécurisation et valorisation des données pour une prise de décision optimisée.',
        },
      ],
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
}


};
</script>

<style scoped>
.services-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #111010;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.service-card {
  background-color: rgb(196, 188, 188);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  max-width: 320px;
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000000;
}

.service-description {
  font-size: 0.95rem;
  color: #000000;
}
/* Animation du CSS */
.fade-slide {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-slide.show {
  opacity: 1;
  transform: translateY(0);
}


</style> -->
<!-- <template>
  <section class="services-section" ref="section">
    <h2 class="section-title">
      <span class="underline">Nos Services</span>
    </h2>
    <p class="services-intro">Des solutions sur mesure pour dirigeants et organisations exigeantes.</p>

    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card fade-slide"
        :style="{ transitionDelay: `${index * 0.2}s` }"
      >
        <div class="service-image-wrapper">
          <img :src="service.image" :alt="service.title" class="service-image" />
          <span class="service-tag">{{ service.tag }}</span>
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
          description:
            'Supervision stratégique, leadership organisationnel et gestion des opérations au plus haut niveau.'
        },
        {
          title: 'Board Advisory Governance',
          image: boardImage,
        
          description:
            'Accompagnement des conseils d’administration pour des décisions éclairées et une gouvernance solide.'
        },
        {
          title: 'Information Management',
          image: infoImage,
         
          description:
            'Organisation, sécurisation et valorisation des données pour une prise de décision optimisée.'
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
  }
};
</script>

<style scoped>
.services-section {
  padding: 5rem 2rem;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000000;
}

.underline {
  display: inline-block;
  position: relative;
}

.underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 3px;
  background: #000000;
  transform: scaleX(0);
  transform-origin: left;
  animation: underlineGrow 1s ease forwards;
  animation-delay: 0.9s;
}

@keyframes underlineGrow {
  to {
    transform: scaleX(1);
  }
}

.services-intro {
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: rgb(112, 108, 108);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(203, 194, 194, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(40px);
}

.service-card.show {
  opacity: 1;
  transform: translateY(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 28px rgba(212, 212, 212, 0.1);
}

.service-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.service-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.9s ease;
}

.service-card:hover .service-image {
  transform: scale(1.5);
}

.service-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #111;
  color: white;
  font-size: 0.75rem;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0.9;
}

.service-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1rem;
  color: #000000;
}
</style> -->
<template>
  <section class="services-section" ref="section">
    
    <div class="intro-block">
      <h1>Our services</h1>
     
      <div class="intro-overlay">
        
        <h2 class="intro-title">
         
          <span class="typewriter-wrapper">
            <span class="typewriter" v-html="highlightedIntro"></span>
          </span>
        </h2>
        <button @click="scrollToServices" class="cta-arrow">
          <span>&#8595;</span>
        </button>
      </div>
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
          <span class="service-tag">{{ service.tag }}</span>
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
      introText: '',
      highlightedIntro: '',
      fullIntroText: 'At BizXO, we offer sharp, executive-level support across three essential service areas — built to move organizations forward',
      highlightTarget: 'propulser',
      services: [
        {
          title: 'General Management',
          image: generalImage,
          tag: 'Leadership',
          description: 'Supervision stratégique, leadership organisationnel et gestion des opérations au plus haut niveau.'
        },
        {
          title: 'Board Advisory Governance',
          image: boardImage,
          tag: 'Conseil',
          description: 'Accompagnement des conseils d’administration pour des décisions éclairées et une gouvernance solide.'
        },
        {
          title: 'Information Management',
          image: infoImage,
          tag: 'Clarté',
          description: 'Organisation, sécurisation et valorisation des données pour une prise de décision optimisée.'
        }
      ]
    };
  },
  mounted() {
    this.typeIntroText();

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
    typeIntroText() {
      let i = 0;
      const interval = setInterval(() => {
        if (i < this.fullIntroText.length) {
          this.introText += this.fullIntroText[i];
          this.highlightedIntro = this.introText.replace(
            new RegExp(this.highlightTarget, 'gi'),
            (match) => `<span class='highlighted-word'>${match}</span>`
          );
          i++;
        } else {
          clearInterval(interval);
        }
      }, 60);
    },
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
h1{
  text-align: center;
}
.services-section {
  padding: 0;
  background-color: #fff;
  text-align: center;
}
.section_number{
  background-color: #fff;
color: #777777;
}

.intro-block {
  background: linear-gradient(-45deg, #8d8787, #343232,#474242);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  color: #fff;
  padding: 2rem 2rem;
  text-align: center;
  
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.intro-overlay {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.intro-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.typewriter-wrapper {
  display: inline-block;
  max-width: 100%;
  word-wrap: break-word;
  white-space: normal;
  font-size: 1.5rem;
}

.typewriter {
  display: inline;
  border-right: 2px solid white;
  animation: blink-caret 0.5s step-end infinite;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.cta-arrow {
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: white;
  animation: bounce 1.5s infinite;
  margin-top: 2rem;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.services-grid {
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
  background-color: #f8f8f8;
}

.service-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.service-card.show {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
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

.service-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #111;
  color: white;
  font-size: 0.75rem;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0.9;
}

.service-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
}

.service-description {
  font-size: 1rem;
  color: #333;
}
</style>
