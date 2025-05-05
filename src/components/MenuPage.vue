<template>
  <div class="header">
  <a href="#" class="logo">BixZo</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#service">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
  </ul>
  </div>
</template>

<script>

export default {
  name: "Header",
  methods: {
    updatemenu()  {
      const menuBtn = document.getElementById('menu-btn');
      const menu = document.querySelector('.menu');
      if (menuBtn.checked) {
        menu.style.borderBottomRightRadius = '0';
        menu.style.borderBottomLeftRadius = '0';
      } else {
        menu.style.borderRadius = '16px';
      }
    }
  },
  mounted() {
    // JavaScript here
  }
}

</script>


<style>

.header {
background-color: #000;
box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
position: fixed;
width: 100%;
z-index: 3;
}

.header ul {
margin: 0;
padding: 0;
list-style: none;
overflow: hidden;
}

.header li a {
display: block;
padding: 14px 16px;
text-decoration: none;
color: #fff;
}

.header li a:hover,
.header .menu-btn:checked ~ .menu li a:hover {
  color:#000;
  background-color: #fff;
}

.header .logo {
display: block;
float: left;
font-size: 2em;
padding: 10px 20px;
text-decoration: none;
color: #fff;
}

/* menu */

.header .menu {
clear: both;
max-height: 0;
background-color: #000;
transition: background-color 0.3s ease;
transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
cursor: pointer;
float: right;
background-color: transparent;
padding: 28px 20px;
position: relative;
user-select: none;
}


.header .menu-icon .navicon {
background: #fff;
display: block;
height: 2px;
position: relative;
transition: background .2s ease-out;
width: 18px;
background-color: black;
transition: background-color 0.3s ease;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
background: #fff;
content: '';
display: block;
height: 100%;
transition: all 0.3s ease;
position: absolute;
transition: all .2s ease-out;
width: 100%;
}

.header .menu-icon .navicon:before {
top: 5px;
}

.header .menu-icon .navicon:after {
top: -5px;
}

.header .menu-icon .navicon,.header .menu-icon .navicon:before,.header .menu-icon .navicon:after {
  background-color: #fff;
}

/* menu btn */



.header .menu-btn {
display: none;
}

.header .menu-btn:checked ~ .menu {
max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
background-color: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
top: 0;
}

/* 48em = 768px */

@media (min-width: 600px) {
.header li {
  float: left;
}
.header li a {
  padding: 20px 30px;
}
.header .menu {
  padding-right: 1,5rem;
  clear: none;
  float: right;
  max-height: none;
}
.header .menu-icon {
  display: none;
}
}
</style>
