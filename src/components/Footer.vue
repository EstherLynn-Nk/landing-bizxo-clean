<template>
    <footer class="bizxo-footer">
      <div class="footer-links">
        <router-link to="/">Accueil</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/where-we-are">Where we are</router-link>
      </div>
  
      <div class="footer-socials">
        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
  
      <div class="footer-copy">
        © {{ new Date().getFullYear() }} BizXO. Tous droits réservés.
      </div>
    </footer>
  </template>
<style scoped>
.bizxo-footer {
  background-color: #666464; 
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
}

.footer-links {
  margin-bottom: 20px;
}

.footer-links a {
  color: #ccc;
  margin: 0 15px;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #e0cba8; /* beige doux */
}

.footer-socials a {
  color: #fff;
  margin: 0 10px;
  font-size: 18px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer-socials a:hover {
  color: #e0cba8;
  transform: scale(1.1);
}

.footer-copy {
  margin-top: 20px;
  font-size: 12px;
  color: #999;
}
</style>
  