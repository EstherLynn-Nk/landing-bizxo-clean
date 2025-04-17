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


<template>
  <section class="services-section">
    <h2 class="section-title">Nos Services</h2>
    <div class="services-grid">
      <div v-for="(service, index) in services" :key="index" class="service-card">
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
};
</script>

<style scoped>
.services-section {
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #222;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.service-card {
  background-color: white;
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
  color: #111;
}

.service-description {
  font-size: 0.95rem;
  color: #555;
}
</style>
