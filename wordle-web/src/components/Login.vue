<template>
    <div class="login">
        <h1>Login</h1>
        <input v-model="username" placeholder="Username">
        <input v-model="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>
  
<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
        login() {
  // Check if the user is already logged in
  if (this.isLoggedIn) {
    return;
  }

  // Get the username and password from the user
  const username = this.username;
  const password = this.password;

  // Authenticate the user
  const isValidUser = this.authService.authenticateUser(username, password);

  // If the user is authenticated, redirect to the notes page
  if (isValidUser) {
    this.$router.push({ path: '/notes' });
  } else {
    // Otherwise, show an error message
    this.error = "Invalid username or password";
  }
}
    }
  }
  </script>