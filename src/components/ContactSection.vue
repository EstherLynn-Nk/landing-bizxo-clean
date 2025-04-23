<!-- <template>
  <section class="contact-intro">
    <h2 class="contact-title">Let’s work together</h2>
    <p class="contact-subtitle">
      Ready to bridge the gap? Reach out and see how BizXO can support your next big step.
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
      console.log("Form submitted:", this.form);
      alert("Message sent! We'll be in touch soon.");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>
<style scoped>
/* INTRO GRADIENT BLOCK */
.contact-intro {
  background: linear-gradient(135deg,#f3f0ed);
  background-size: 300% 300%;
  animation: gradientScroll 14s ease infinite;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #eaeaea, #d1d1d1, #999);
  text-align: center;
}

@keyframes gradientScroll {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contact-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeDown 0.8s ease forwards;
  opacity: 0;
  color: #000;
}

.contact-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color:#000;
  animation: fadeUp 1s ease 0.5s forwards;
  opacity: 0;
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FORMULAIRE */
.contact-form-section {
  padding: 5rem 2rem;
  background-color: linear-gradient(135deg,#d8d8d8,#3d3a3a,#0a0a0a);
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  background: linear-gradient(90deg,#555252);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.form-group {
  margin-bottom: 1.8rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #ffffff;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: #f9f9f9;
  transition: border 0.3s ease, background-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #111;
  background-color: #fff;
}

/* BOUTON ANIMÉ */
.submit-button {
  background: rgba(17, 17, 17, 0.95);
  color: white;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

.submit-button:hover {
  transform: scale(1.05);
  background-color: #000;
}
</style> -->
<template>
  <section class="contact-intro">
    <div class="section-number">02</div>
    <h2 class="contact-title">
      <span class="underline">Let’s work together</span>
    </h2>
    <p class="contact-subtitle">
      Ready to bridge the gap? Reach out and see how BizXO can support your next big step.
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
      console.log("Form submitted:", this.form);
      alert("Message sent! We'll be in touch soon.");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
/* TITRE & NUMÉRO */
.section-number {
  font-size: 1.2rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-intro {
  background: linear-gradient(135deg, #f2f2f2, #dddddd, #cfcfcf);
  background-size: 300% 300%;
  animation: gradientScroll 12s ease infinite;
  padding: 6rem 2rem;
  text-align: center;
}

@keyframes gradientScroll {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contact-title {
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #222;
}

.underline {
  position: relative;
  display: inline-block;
}

.underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 60%;
  height: 3px;
  background: #111;
  transform: scaleX(0);
  transform-origin: center;
  animation: underlineGrow 1s ease forwards;
  animation-delay: 0.3s;
  padding-bottom: 1px;
}

@keyframes underlineGrow {
  to {
    transform: translateX(-50%)scaleX(1);
  }
}

.contact-subtitle {
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: #555;
  opacity: 0;
  animation: fadeUp 1s ease 0.5s forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FORMULAIRE */
.contact-form-section {
  padding: 5rem 2rem;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.form-group {
  margin-bottom: 1.8rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fdfdfd;
  transition: border 0.3s ease, background-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #111;
  background-color: #fff;
}

.submit-button {
  background: #111;
  color: white;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.submit-button:hover {
  transform: scale(1.05);
  background-color: #000;
}
</style>
