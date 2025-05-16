<template>
  <section class="contact-modern-section">
    <!-- TITRE -->
    <div class="contact-header">
      <div class="section-number">04.</div>
      <h2 class="contact-title">
        <span class="underline">Get in touch </span>
      </h2>
      <p class="contact-subtitle">
        Wondering how we can help? Start the conversation — and let’s explore solutions.
      </p>
    </div>

    <!-- ETAPES INDICATEURS NUMÉROTÉS -->
    <div class="step-indicator">
      <div :class="['step-circle', step === 1 ? 'active' : '']">1</div>
      <div :class="['step-circle', step === 2 ? 'active' : '']">2</div>
      <div :class="['step-circle', step === 3 ? 'active' : '']">3</div>
    </div>

    <!-- FORMULAIRE INTELLIGENT -->
    <div class="contact-form-container">
      <form class="smart-form" @submit.prevent="handleSubmit">
        <div v-if="step === 1" class="form-step step-box">
          <div class="form-content">
            <label for="name">Full Name</label>
            <input id="name" v-model="form.name" type="text" required />
          </div>
          <button @click.prevent="nextStep" :disabled="!form.name">Next</button>
        </div>

        <div v-if="step === 2" class="form-step step-box">
          <div class="form-content">
            <label for="email">Email Address</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>
          <button @click.prevent="prevStep">Back</button>
          <button @click.prevent="nextStep" :disabled="!form.email">Next</button>
        </div>

        <div v-if="step === 3" class="form-step step-box">
          <div class="form-content">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button @click.prevent="prevStep">Back</button>
          <button type="submit" :disabled="!form.message">Send</button>
        </div>

        <div v-if="step === 4" class="thank-you">
          <p>✅ Thank you! We'll be in touch very soon.</p>
        </div>
      </form>
    </div>

    <div class="hourglass-wrapper">
      <div class="hourglass"></div>
      <p class="coming-text">
        Our website is under construction — the full BizXO experience is coming soon.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      step: 1,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  computed: {
    progress() {
      return (this.step - 1) * 33.33;
    }
  },
  methods: {
    nextStep() {
      if (this.step < 4) this.step++;
    },
    prevStep() {
      if (this.step > 1) this.step--;
    },
    async handleSubmit() {
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        const result = await response.json();
        if (result.success) {
          this.step = 4;
        } else {
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      } catch (error) {
        console.error("Erreur de connexion:", error);
        alert("Connexion au serveur échouée.");
      }
    }
  }
};
</script>

<style scoped>
/* ton CSS reste inchangé ici */
</style>
