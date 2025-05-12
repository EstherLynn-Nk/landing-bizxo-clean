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
      if (!mapContainer.value) {
        console.warn("❗Conteneur introuvable.");
        return;
      }

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
