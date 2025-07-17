<template>
  <div class="products">
    <h1 class="title">Products</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.item_id" class="product-item">
        <h2 class="product-name">{{ product.item_name }}</h2>
        <p class="product-description">{{ product.item_description }}</p>
        <img :src="product.item_url" alt="Product Image" class="product-image" />
        <p class="product-price">Price: ${{ product.item_price }}</p>
        <button @click="addToCart(product)" class="add-to-cart">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [] // This will hold the product data
    };
  },
  created() {
    // Fetch products from your API or static data
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Replace with your API call
      this.products = [
        { item_id: 1, item_name: 'Mindful Journal', item_description: 'A guided journal to help you reflect and set life goals.', item_url: 'https://www.leatherneo.com/cdn/shop/articles/img-1704854220174.jpg?v=1704854464', item_price: 300 },
        { item_id: 2, item_name: 'Yoga Mat', item_description: 'A non-slip yoga mat for your daily practice.', item_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.K2zBa4V_4Jjhg4mv1H-BuQHaHa%3Fpid%3DApi&f=1&ipt=27ce9f9e02bfe530126174e2eeb0c82bcbced79d02533ad507c2ba8206dd1076&ipo=images', item_price: 150 },
        { item_id: 3, item_name: 'Meditation Cushion set', item_description: 'A comfortable cushion to support your meditation practice.', item_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.eO1UdXNj9kwpYVTJ6f9RqwHaEK%3Fpid%3DApi&f=1&ipt=9c2f7043ec3f2298d4e803767666d059d39c4cbb8d625c880288eaa409c47163&ipo=images', item_price: 450 },
        { item_id: 4, item_name: 'Essential Oil Diffuser', item_description: 'A diffuser to create a calming atmosphere with essential oils.', item_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.AXUkhrnwho07Vu2mLuamkQHaHb%3Fr%3D0%26pid%3DApi&f=1&ipt=82f3c75d7266d04106ab8ba1b3843e70b877aad33bcb0266069140242799172e&ipo=images', item_price: 600 },
        { item_id: 5, item_name: 'Herbal Tea Set', item_description: 'A selection of herbal teas for relaxation and wellness.', item_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.KzrAAZYiVhZTJWDDnGF2qwHaFn%3Fpid%3DApi&f=1&ipt=490efe2d3c1c846a630f7dec85964b783b0f8d3d60b8b03ecc4780581a2197f7&ipo=images', item_price: 200 }
      ];
    },
    addToCart(product) {
      // Logic to add the product to the cart
      console.log('Added to cart:', product);
    }
  }
};
</script>

<style scoped>
.products {
  padding: 20px;
  background-color: #f9f9f9; /* Light background color */
}

.title {
  text-align: center;
  font-size: 2.5rem; /* Large font size for the title */
  color: #333; /* Dark text color */
  margin-bottom: 20px; /* Space below the title */
}

.product-list {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
  display: grid; /* Use grid layout */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between grid items */
}

.product-item {
  background-color: #fff; /* White background for product items */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px; /* Rounded corners */
  padding: 15px; /* Padding inside product items */
  text-align: center; /* Center text */
  transition: box-shadow 0.3s; /* Smooth transition for hover effect */
}

.product-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow effect on hover */
}

.product-name {
  font-size: 1.5rem; /* Font size for product name */
  color: #007bff; /* Blue color for product name */
  margin: 10px 0; /* Space above and below product name */
}

.product-description {
  font-size: 1rem; /* Font size for product description */
  color: #666; /* Gray color for description */
  margin: 10px 0; /* Space above and below description */
}

.product-image {
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Rounded corners for images */
}

.product-price {
  font-size: 1.2rem; /* Font size for product price */
  color: #333; /* Dark color for price */
  margin: 10px 0; /* Space above and below price */
}

.add-to-cart {
  padding: 10px 15px; /* Padding for the button */
  font-size: 1rem; /* Font size for the button */
  color: #fff; /* White text color */
  background-color: #28a745; /* Green background color */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.add-to-cart:hover {
  background-color: #218838; /* Darker green on hover */
}
</style>
