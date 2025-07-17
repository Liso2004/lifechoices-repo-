<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-links">
        <router-link to="/" class="nav-link">Landing</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.navbar {
  display: flex; /* Flexbox for layout */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
  background-color: #007bff; /* Blue background color */
  padding: 15px 20px; /* Padding around the navbar */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.navbar-links {
  display: flex; /* Flexbox for links */
}

.nav-link {
  color: #fff; /* White text color */
  text-decoration: none; /* Remove underline */
  margin-right: 20px; /* Space between links */
  font-size: 1.1rem; /* Font size for links */
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.nav-link:hover {
  color: #e0e0e0; /* Light gray on hover */
}

.nav-link:last-child {
  margin-right: 0; /* Remove margin from the last link */
}
</style>
