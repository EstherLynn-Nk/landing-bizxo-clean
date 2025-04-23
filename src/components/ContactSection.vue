<template>
  <section class="contact-modern-section">
    <!-- TITRE -->
    <div class="contact-header">
      <div class="section-number">03.</div>
      <h2 class="contact-title">
        <span class="underline">Let’s work together</span>
      </h2>
      <p class="contact-subtitle">
        Ready to bridge the gap? Reach out and see how BizXO can support your next big step.
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
          <h3>Step 1: Full Name</h3>
          <div class="form-content">
            <label for="name">Full Name</label>
            <input id="name" v-model="form.name" type="text" required />
          </div>
          <button @click.prevent="nextStep" :disabled="!form.name">Next</button>
        </div>

        <div v-if="step === 2" class="form-step step-box">
          <h3>Step 2: Email Address</h3>
          <div class="form-content">
            <label for="email">Email Address</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>
          <button @click.prevent="prevStep">Back</button>
          <button @click.prevent="nextStep" :disabled="!form.email">Next</button>
        </div>

        <div v-if="step === 3" class="form-step step-box">
          <h3>Step 3: Message</h3>
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
    handleSubmit() {
      console.log("Form submitted:", this.form);
      this.step = 4;
    }
  }
};
</script>

<style scoped>
.contact-modern-section {
  position: relative;
  background: linear-gradient(135deg, #f2f2f2, #e8e4dd);
  padding: 6rem 2rem;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  min-height: 100vh;
}

.contact-header {
  max-width: 700px;
  margin: 0 auto 3rem;
  animation: fadeUp 1s ease-out forwards;
  position: relative;
  z-index: 2;
}
.section-number {
  font-size: 1.1rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}
.contact-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 1rem;
}
.underline {
  position: relative;
  display: inline-block;
}
.underline::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #000, #e0cba8, #000);
  background-size: 200% 100%;
  animation: shine 3s linear infinite;
  transform: translateX(-50%);
}
@keyframes shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.contact-subtitle {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.6;
  opacity: 0;
  animation: fadeUp 1s ease 0.4s forwards;
}

/* ÉTAPES NUMÉROTÉES */
.step-indicator {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.step-circle {
  width: 36px;
  height: 36px;
  background: #ccc;
  border-radius: 50%;
  color: #111;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}
.step-circle.active {
  background: #e0cba8;
  color: #000;
}

.contact-form-container {
  max-width: 600px;
  margin: auto;
  position: relative;
  z-index: 2;
}

.smart-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.step-box {
  background: #111;
  padding: 2rem;
  border-radius: 16px;
  color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.step-box h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e0cba8;
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

label {
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #fff;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fdfdfd;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  margin-bottom: 1rem;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #111;
  background-color: #fff;
}

button {
  background: #e0cba8;
  color: #111;
  font-weight: 600;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  margin: 0.5rem 0.25rem;
  transition: all 0.3s ease;
}

button:hover:enabled {
  background: #fff;
  transform: scale(1.05);
}
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.thank-you {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #2e7d32;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
