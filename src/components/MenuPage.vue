<template>
    <div class="overlay" v-if="visible">
      <button class="close-btn" @click="$emit('close')">✕</button>
      <ul class="menu-list">
        <li
          v-for="item in navItems"
          :key="item.id"
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
          { id: "location", label: "Where We Are" },
          { id: "contact", label: "Contact" }
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
    transition: opacity 0.4s ease;
  }
  
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  
  .menu-list li {
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
    margin: 2rem 0;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .menu-list li:hover {
    color: #e0cba8;
  }
  
  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  </style>
  