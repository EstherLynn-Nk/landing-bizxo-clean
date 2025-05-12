<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  background-color: #000; /* ✅ Fond noir total */
}

/* Feuille CSS globale à placer dans App.vue ou main.css */

#leaflet-map {
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 0;
  margin: 0;
 

}

.map-wrapper {
  width: 100%;
  height: calc(100vh - 60px); /* ou la hauteur réelle de ton header */
  margin: 0;
  padding-bottom: 5rem;
  position: relative;
  background-color: #000;
 
}

.leaflet-html-marker {
  background: transparent !important;
  border: none !important;
}

.marker-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pulse-marker {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 12px white;
  animation: pulse 1.5s infinite ease-in-out;
  z-index: 2;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.tooltip-label {
  position: absolute;
  bottom: 100%;

  font-size: 12px;
  color: white;
  background: rgba(255,255,255,0.1);
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1;
}

.marker-wrapper:hover .tooltip-label {
  opacity: 1;
  transform: translateY(-4px);
}

.where-we-are .header {
  background-color: #000;
  color: white;
  margin: 0;
  padding: 0;

}

.where-we-are .header h2{
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
  margin: 0;         
  padding: 1rem 0;   
  position: relative;
  display: inline-block;
}
.subtitle {
  background-color: black;
  margin: 0;
  padding-bottom: 2.5rem;
  font-size: 1.3rem;
  padding-top: 2.5rem;
}
.section-number{
  font-size: 1.2rem;
  padding-top: 4rem;
}
</style>