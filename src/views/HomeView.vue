<!-- <script>
import HeroSection from '@/components/HeroSection.vue'
import AboutUsSection from '@/components/AboutUsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutUsSection,
    ServicesSection,
    ContactSection
  }
}
</script>








<!-landing-vue/
├── public/
├── src/
│   ├── assets/              # Images, logos, etc.
│   ├── components/          # Blocs réutilisables (Header, Footer, etc.)
│   ├── views/               # Pages complètes (HomeView.vue, AboutView.vue...)
│   ├── router/
│   │   └── index.js         # Définition des routes
│   ├── App.vue              # Composant principal
│   └── main.js              # Point d’entrée de l’app
├── package.json -->






<!--  
 <template>
  <div>
    <Menu/>
    <HeroSection />
    <ServicesSection/>
    <ContactSection/>
    <WhereAreWe/>
    <Footer/>
  
  

  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import WhereAreWe from '@/components/WhereAreWe.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';




export default {
  name: 'HomeView',
  components: {
    Menu,
    HeroSection,
    ServicesSection,
    ContactSection,
    WhereAreWe,
    Footer
    
    
  }
}
</script> -->


<template>
  <div>
    <button class="menu-toggle" @click="showOverlay = true">Menu</button>

    <MenuPage :visible="showOverlay" @close="showOverlay = false" />
  

    <section id="home">
      <HeroSection />
    </section>

    <section id="services">
      <ServicesSection />
    </section>
    <section id="about">
      <AboutUsSection />
    </section>

    <section id="location">
      <WhereAreWe />
    </section>

    <section id="contact">
      <ContactSection />
    </section>
   
    <Footer/>

    <Menu/>
  </div>
</template>


<script>

import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import WhereAreWe from '@/components/WhereAreWe.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';
import MenuPage from '@/components/MenuPage.vue';
import AboutUsSection from '@/components/AboutUsSection.vue';




export default {
  name: 'HomeView',
  components: {
    MenuPage,
    Menu,
    HeroSection,
    ServicesSection,
    ContactSection,
    WhereAreWe,
    AboutUsSection,
    Footer
    
    
  },data() {
    return {
      showOverlay: false
    };
  }
};
</script>
<style scoped>
.menu-toggle {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 2100;
  background: #e0cba8;
  color: #111;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: #fff;
}
</style>