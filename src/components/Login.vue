<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Login</h1>
    <form @submit.prevent="handleLogin" class="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 mb-2">Username:</label>
        <input
          type="text"
          v-model="username"
          required
          class="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          v-model="password"
          required
          class="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
      >
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    handleLogin() {
      // Replace with your actual login logic
      if (this.username === 'admin' && this.password === 'password') {
        alert('Login successful!');
        this.$router.push('/'); // Redirect to landing page after login
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    }
  }
};
</script>

<style scoped>
/* Background styling for the login container */
.bg-gray-100 {
  background-color: #f7fafc; /* Light gray background */
}

/* Styling for the form */
form {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

/* Input field styling */
input {
  transition: border-color 0.3s ease; /* Smooth transition for border color */
}

input:focus {
  border-color: #3182ce; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

/* Button styling */
button {
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for background and transform */
}

button:hover {
  background-color: #2b6cb0; /* Darker blue on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

/* Error message styling */
.text-red-500 {
  font-weight: bold; /* Make error message bold */
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .max-w-sm {
    width: 90%; /* Make the form take up more width on smaller screens */
  }
}
</style>
