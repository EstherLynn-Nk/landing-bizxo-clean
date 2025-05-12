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

    <!-- Petit espace pour respirer avant la section suivante -->
    <div class="spacer"></div>
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
      if (!mapContainer.value) return;

      const map = L.map(mapContainer.value, {
        zoomControl: false,
        attributionControl: false,
        minZoom: 1.5,
        maxZoom: 6,
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
          html: `
            <div class="marker-wrapper">
              <div class="pulse-marker"></div>
              <div class="tooltip-label">${loc.name}</div>
            </div>
          `,
          className: 'leaflet-html-marker',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        L.marker(loc.coords, { icon: marker }).addTo(map);
      });

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
    });

    return { titleRef, typedSubtitle, mapContainer };
  }
};
</script>

<style>
.where-we-are {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
}

.header {
  text-align: center;
  padding: 1.5rem 1rem 1rem;
  color: white;
}

.section-number {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.header h2 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: bold;
  position: relative;
  margin: 0;
  display: inline-block;
}

.header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0cba8, #ffffff);
  animation: underline-shine 3s linear infinite;
}

@keyframes underline-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #ccc;
  max-width: 700px;
  margin: 0.5rem auto 2rem;
  text-align: center;
  padding: 2rem 1rem 2rem 2rem;
}

.map-wrapper {
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
}

#leaflet-map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
}

.spacer {
  height: 4rem;
  background-color: transparent;
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
  margin-bottom: 8px;
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

@media (max-width: 480px) {
  .map-wrapper {
    height: 60vh;
  }
}
</style>
