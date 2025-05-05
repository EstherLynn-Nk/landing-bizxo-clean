<template>
    <nav class="dot-nav">
      <ul>
        <li v-for="item in navItems" :key="item.id">
          <button
            :class="{ active: activeSection === item.id }"
            @click="scrollToSection(item.id)"
            :aria-label="item.label"
          >
            <span class="tooltip">{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  
  export default {
    name: "DotNav",
    setup() {
      const navItems = [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "location", label: "Where We Are" },
        { id: "contact", label: "Contact" },
        { id: "about", label: "About" }
      ];
  
      const activeSection = ref("home");
  
      const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      const updateActiveSection = () => {
        const scrollY = window.scrollY;
        let current = "home";
        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (el && el.offsetTop <= scrollY + 100) {
            current = item.id;
          }
        }
        activeSection.value = current;
      };
  
      onMounted(() => {
        window.addEventListener("scroll", updateActiveSection);
      });
  
      return { navItems, scrollToSection, activeSection };
    }
  };
  </script>
  
  <style scoped>
  .dot-nav {
    position: fixed;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    z-index: 999;
  }
  .dot-nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
  .dot-nav button {
    background-color: #aaa;
    position: relative;
    border: none;
    padding: 5px;
    margin: 5px;
    font-size: 31px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .dot-nav button.active {
    background-color: #e0cba8;
    transform: scale(1.2);
  }
  .dot-nav button:hover .tooltip {
    opacity: 1;
    transform: translateX(-110%);
  }
  .tooltip {
  position: absolute;
  left: 150%;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  background: rgba(255, 255, 255, 0.95);
  color: #111;
  padding: 12px;
  margin: 6px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
@media (max-width: 768px) {
  .dot-nav{
    display: none;
  }
}

.dot-nav button:hover .tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(-10px);
}

  </style>
  