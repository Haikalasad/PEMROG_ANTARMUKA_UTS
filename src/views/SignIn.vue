<template>
    <div class="container">
      <div class="glassmorphism-card">
        <!-- Login Section -->
        <div class="login-section">
          <h2 class="LoginHeader">Sign In</h2> 
          <form @submit.prevent="signIn">
            <!-- Username Input -->
            <label for="username">Username:</label>
            <input v-model="usernameValue" type="text" placeholder="Choose a username" />
  
            <!-- Password Input -->
            <label for="password">Password:</label>
            <input v-model="passwordValue" type="password" placeholder="Choose a password" />
  
            <!-- Sign In Button -->
            <button type="submit" class="SignInButton">Sign In</button>
          </form>
  
          <!-- Don't Have an Account? Sign Up Link -->
          <div class="DonTHaveAnAccountCreateNowSignUp">
            <span>Don’t have an account? Create now </span>
            <router-link to="/signup" class="SignUpLink"> Sign up</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignInPage',
    data() {
      return {
        usernameValue: '',
        passwordValue: '',
      };
    },
    methods: {
      signIn() {
        // Verifikasi username dan password
        if (this.usernameValue === 'pengguna' && this.passwordValue === 'sandi') {
          this.$router.push({ name: 'Home' });
        } else {
          alert('Login failed. Check your username and password.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
.container {
  position: relative;
  margin-top: 0;
  height: 100vh;
  width: 100%;
  background-image: url('@/assets/logo3.png');
  background-size: cover;
  background-position: center;
}

.glassmorphism-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  background: rgba(249, 249, 249, 0.9); 
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.login-section {
  max-width: 400px;
  margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }
.LoginHeader {
  font-size: 24px;
  color: #333; 
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.SignInButton {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
 
  .DonTHaveAnAccountCreateNowSignUp {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .SignUpLink {
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 5px;
  }
  </style>
  