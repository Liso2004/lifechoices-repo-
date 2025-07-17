<template>
  <div class="landing">
    <h1 class="title">Welcome to Our Shop</h1>
    <p class="description">Your one-stop shop for mindful products.</p>
    <router-link to="/products" class="view-products">View Products</router-link>
  </div>
</template>

<script>
export default {
  name: 'Landing'
};
</script>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-image: url('https://example.com/your-background-image.jpg'); 
  background-size: cover; 
  background-position: center; 
  padding: 20px;
  text-align: center;
  color: white; 
}

.title {
  font-size: 3rem; 
  margin-bottom: 10px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  color: #000;
}

.description {
  font-size: 1.5rem; 
  margin-bottom: 20px; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); 
}

.view-products {
  padding: 12px 24px; 
  font-size: 1.1rem; 
  color: #000000;
  background-color: #007bff; 
  border: none;
  border-radius: 5px; 
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.view-products:hover {
  background-color: #0056b3; 
  transform: scale(1.05); 
}
</style>
