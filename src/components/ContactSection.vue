
<!-- src/components/ContactForm.vue -->
<template>
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
</style>
