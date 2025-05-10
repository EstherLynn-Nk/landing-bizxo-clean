<template>
  <section class="where-we-are">
    <div class="header">
      <div class="section-number">03.</div>
      <h2 ref="titleRef" class="title fade-in">
        <span class="underline-text">Our Global Footprint</span>
      </h2>
      <p ref="typedSubtitle" class="subtitle typewriter-text"></p>
    </div>

    <div class="map-wrapper">
      <div id="leaflet-map" ref="mapContainer"></div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'WhereWeAre',
  setup() {
    const titleRef = ref(null);
    const typedSubtitle = ref(null);
    const mapContainer = ref(null);
    const subtitleText =
      "BizXO’s experts are located worldwide, ready to support your business wherever you operate.";
    let hasTyped = false;

    const typeWriter = () => {
      const el = typedSubtitle.value;
      let i = 0;
      el.innerHTML = "";
      const interval = setInterval(() => {
        el.innerHTML += subtitleText[i];
        i++;
        if (i >= subtitleText.length) clearInterval(interval);
      }, 30);
    };

    onMounted(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTyped) {
            titleRef.value.classList.add("visible");
            setTimeout(typeWriter, 600);
            hasTyped = true;
          }
        },
        { threshold: 0.6 }
      );

      if (titleRef.value) observer.observe(titleRef.value);

      const map = L.map(mapContainer.value, {
        zoomControl: false,
        attributionControl: false,
        minZoom: 2,
        maxZoom: 5,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false
      }).setView([15, 0], 2);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '',
        noWrap: true
      }).addTo(map);

      const locations = [
        { name: 'Canada', coords: [45.4215, -75.6972] },
        { name: 'Germany', coords: [52.52, 13.405] },
        { name: 'Turkey', coords: [39.9334, 32.8597] },
        { name: 'Chad', coords: [12.1348, 15.0557] },
        { name: 'Namibia', coords: [-22.5597, 17.0832] }
      ];

      locations.forEach(loc => {
        const marker = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="marker-wrapper">
              <div class="tooltip-label">${loc.name}</div>
              <div class="pulse-marker"></div>
            </div>
          `,
          iconSize: [30, 42],
          iconAnchor: [15, 21]
        });

        L.marker(loc.coords, { icon: marker }).addTo(map);
      });
    });

    return { titleRef, typedSubtitle, mapContainer };
  }
};
</script>

<style scoped>
.where-we-are {
  background-color: #201f1f;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  font-family: 'Helvetica Neue', sans-serif;
}

.header {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
}

.section-number {
  font-size: 1.3rem;
  font-weight: 500;
  color: #e9dfdf;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.title.visible {
  opacity: 1;
  transform: translateY(0);
}

.subtitle {
  font-size: 1.2rem;
  color: #cccccc;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  width: fit-content;
  margin: 0 auto;
  animation: blink-caret 0.8s step-end infinite;
}

@keyframes blink-caret {
  0%, 100% { border-color: transparent; }
  50% { border-color: rgba(255, 255, 255, 0.6); }
}

.map-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

#leaflet-map {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  z-index: 1;
}

.leaflet-container {
  background: transparent !important;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
}

.marker-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tooltip-label {
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 12px;
  border-radius: 8px;
  margin-bottom: 6px;
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  font-family: 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
}

.pulse-marker:hover + .tooltip-label,
.marker-wrapper:hover .tooltip-label {
  opacity: 1;
}

.pulse-marker {
  width: 16px;
  height: 16px;
  background: #e0cba8;
  border-radius: 50%;
  box-shadow: 0 0 12px #e0cba8;
  animation: pulse 1.5s infinite ease-in-out;
  cursor: pointer;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.underline-text {
  position: relative;
  display: inline-block;
}

.underline-text::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0cba8, #ffffff);
  transform: translateX(-50%);
  animation: underline-shine 3s linear infinite;
}

@keyframes underline-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
</style>
