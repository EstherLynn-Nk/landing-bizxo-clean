
<!-- src/components/ContactForm.vue -->
<!-- <template>
  <section class="contact-form-section">
    <div class="form-container">
      <h2>Contactez-nous</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Adresse e-mail</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Formulaire envoyé :", this.form);
      // Tu peux ajouter ici un envoi via email API ou stockage backend.
      alert("Merci pour votre message !");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact-form-section {
  background-color: #f2f1ef;
  color: #1a1a1a;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #555;
  background-color: #fff;
}

button {
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  padding: 14px 24px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}
</style> -->
<template>
  <section class="contact-intro">
    <h2 class="contact-title">Let’s work together</h2>
    <p class="contact-subtitle">
      Ready to bridge the gap? Reach out to explore how BizXO can support your goals.
    </p>
  </section>

  <section class="contact-form-section">
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      // You can connect this to an API later
      console.log("Form submitted:", this.form);
      alert("Message sent! We'll be in touch soon.");
      // Reset form
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
/* Gradient intro section */
.contact-intro {
  background: linear-gradient( #777, #ffffff);
  background-size: 400% 400%;
  animation: gradientShift 12s ease infinite;
  padding: 6rem 2rem;
  color: #fff;
  text-align: center;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
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

/* Contact form */
.contact-form-section {
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #111;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #999;
  background-color: #fafafa;
}

.submit-button {
  background-color: #111;
  color: white;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #333;
}
</style>
