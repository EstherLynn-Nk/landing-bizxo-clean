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
import AboutUsPage from '@/components/pages/AboutUsPage.vue';



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
  }
  ,data() {
    return {
      showOverlay: false
    };
  }
};
</script>
