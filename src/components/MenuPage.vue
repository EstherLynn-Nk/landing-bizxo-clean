<template>
    <div class="overlay" v-if="visible">
      <button class="close-btn" @click="$emit('close')">✕</button>
      <ul class="menu-list">
        <li
          v-for="(item, index) in navItems"
          :key="item.id"
          :style="`--i: ${index}`"
          @click="goToSection(item.id)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuOverlay",
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        navItems: [
          { id: "home", label: "Home" },
          { id: "services", label: "Services" },
          { id: "location", label: "Our Footprint" },
          { id: "contact", label: "Contact" },
          { id: "about", label: "About" },
        ]
      };
    },
    methods: {
      goToSection(id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          this.$emit("close");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  
  .menu-list li {
    font-size: 2.7rem;
    color: white;
    font-weight: bold;
    margin: 2rem 0;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlideIn 0.6s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }
  
  .menu-list li:hover {
    color: #e0cba8;
    text-shadow: 0 0 10px rgba(224, 203, 168, 0.6);
  }
  
  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .close-btn:hover {
    transform: rotate(90deg);
  }
  </style>
  