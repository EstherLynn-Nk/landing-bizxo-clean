<template>
    <section class="globe-section">
      <h2 class="section-title">Where We Are</h2>
      <div ref="globeContainer" class="globe-container"></div>
    </section>
  </template>
  
  <script>
  import Globe from 'globe.gl';
  import * as THREE from 'three';
  
  export default {
    name: 'GlobeView',
    mounted() {
      const world = Globe()(this.$refs.globeContainer)
      .globeImageUrl('https://raw.githubusercontent.com/serhiik/three-globe-textures/main/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://raw.githubusercontent.com/serhiik/three-globe-textures/main/img/earth-topology.png')
      .backgroundColor('#ffffff')
        .pointOfView({ lat: 20, lng: 0, altitude: 2 }, 0)
        .htmlElementsData(this.locations)
        .htmlElement(d => {
          const el = document.createElement('div');
          el.innerHTML = '📍';
          el.style.color = '#ff0000';
          el.style.fontSize = '24px';
          el.style.transform = 'translate(-50%, -50%)';
          return el;
        });
  
      // Stop globe rotation
      world.controls().autoRotate = false;
    },
    data() {
      return {
        locations: [
          { lat: 45.4215, lng: -75.6972, name: 'Canada' },
          { lat: 48.8566, lng: 2.3522, name: 'France' },
          { lat: 52.52, lng: 13.405, name: 'Germany' },
          { lat: 3.848, lng: 11.5021, name: 'Cameroon' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .globe-section {
    padding: 4rem 2rem;
    background: #ffffff;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #afa1a1;
  }
  
  .globe-container {
    height: 600px;
    width: 100%;
    border-radius: 12px;
  }
  </style>
  