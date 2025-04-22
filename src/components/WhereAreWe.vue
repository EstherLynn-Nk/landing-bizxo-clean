<template>
    <section class="where-we-are">
      <div class="header">
        <h2 class="title">Where We Are</h2>
        <p class="subtitle">
          BizXO supports global leadership and transformation initiatives across 4 key regions.
        </p>
      </div>
  
      <div class="map-wrapper">
        <div class="map-image"></div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .where-we-are {
    background-color: #111;
    color: white;
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .header {
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 0 1rem;
  }
  
  .title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #e0e0e0;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #cccccc;
  }
  
  .map-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  }
  
  .map-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: url('@/assets/cartebizxo.png'); 
    background-size: cover;
    background-position: center;
    animation: zoomIn 10s ease-in-out infinite alternate;
    filter: brightness(0.6);
  }
  
  @keyframes zoomIn {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
  </style>
  