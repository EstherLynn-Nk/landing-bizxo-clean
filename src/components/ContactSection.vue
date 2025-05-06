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
  background: #6a605080;
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
  max-width: 400px;
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


/* SABLIER */
.hourglass {
  width: 30px;
  height: 60px;
  border: 4px solid #000000;
  border-radius: 4px;
  position: relative;
  animation: flip 2s infinite ease-in-out;
  box-sizing: border-box;
}

.hourglass::before,
.hourglass::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-color: #000000 transparent;
}

.hourglass::before {
  top: 8px;
  border-width: 12px 10px 0 10px;
}

.hourglass::after {
  bottom: 8px;
  border-width: 0 10px 12px 10px;
}

@keyframes flip {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.section-number {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  animation: fadeIn 1s ease forwards;
}

.hourglass-wrapper {

  color: white;
  text-align: center;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60vh;
  padding-bottom: 3rem;
}

.coming-text {
  margin-top: 2rem;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: #000000;
}

@media screen and (max-width: 768px) {
  .contact-modern-section {
    padding: 4rem 1rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-subtitle {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  .step-indicator {
    gap: 0.5rem;
  }

  .step-circle {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .step-box {
    padding: 1.5rem 1rem;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.8rem;
  }

  button {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
  }

  .coming-text {
    font-size: 1rem;
    padding: 0 1rem;
    text-align: center;
  }

  .hourglass-wrapper {
    height: auto;
    padding-bottom: 2rem;
  }

  .hourglass {
    width: 24px;
    height: 50px;
  }
}


</style>
