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






 
 <template>
  <div>
    
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




export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServicesSection,
    ContactSection,
    WhereAreWe,
    Footer
    
    
  }
}
</script>
