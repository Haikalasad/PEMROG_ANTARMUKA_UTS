<template>
    <div class="SignInPage">
        <img class="Unsplash8gdayy2lhi0" src="https://via.placeholder.com/1920x1280" />

        <div class="Username">
            <label for="username" class="InputLabel">Username</label>
            <input type="text" id="username" v-model="usernameValue" placeholder="Enter your username">
        </div>

        <div class="Password">
            <label for="password" class="InputLabel">Password</label>
            <input type="password" id="password" v-model="passwordValue" placeholder="Enter your password">
        </div>

        <button @click="signIn" class="SignInButton">Sign In</button>

        <img class="Rectangle1" src="@/assets/Rectangle 1.jpg" />

        <div class="HelloBoss">Hello Boss</div>
        <div class="WelcomeBackYouAlmostForgotMe">Welcome back, you almost forgot me!</div>

        <div class="DonTHaveAnAccountCreateNowSignUp">
            <span>Don’t have an account? Create now</span>
            <router-link to="/signup" class="SignUpLink"> Sign up</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SignInPage',
    data() {
        return {
            usernameValue: '', 
            passwordValue: '' 
        }
    },
    methods: {
        signIn() {
            // Lakukan verifikasi username dan password di sini
            if (this.usernameValue === 'pengguna' && this.passwordValue === 'sandi') {
                this.$router.push({ name: 'Home' });
            } else {
                alert('Login gagal. Periksa username dan password Anda.');
            }
        },
    },
};
</script>

<style scoped>
.SignInPage {
    width: 100%;
    height: 100vh;
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

body {
    overflow: hidden;
}

input {
    width: 558px;
    height: 52px;
    flex-shrink: 0;
    border: 1px solid #B5B5B5;
    padding: 5px 20px;
    background: rgba(217, 217, 217, 0.00);
    font-size: 24px;
}

.Unsplash8gdayy2lhi0 {
    width: 1920px;
    height: 1279.87px;
    position: absolute;
    left: 107px;
    top: -1409px;
}

.Username {
    width: 558px;
    height: 52px;
    left: 817px;
    top: 426px;
    position: absolute;
    background: transparent;
}

.SignInButton {
    width: 558px;
    height: 67px;
    left: 817px;
    top: 550px;
    position: absolute;
    background: #151515;
    border: 1px #B5B5B5 solid;
    color: white;
    font-size: 24px;
    font-family: 'Poppins';
    font-weight: 500;
}

.Password {
    width: 108px;
    height: 28px;
    left: 813px;
    top: 400px;
    position: absolute;
    color: black;
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: 400;
}

.Rectangle3 {
    width: 558px;
    height: 52px;
    left: 817px;
    top: 561px;
    position: absolute;
    background: transparent;
    border: 1px #B5B5B5 solid;
}

.Rectangle1 {
    width: 720px;
    height: 1024px;
    left: 0;
    top: 0;
    position: absolute;
}

.HelloBoss {
    width: 248px;
    left: 994px;
    top: 100px;
    position: absolute;
    color: #151515;
    font-size: 48px;
    font-family: 'Poppins';
    font-weight: 500;
}

.WelcomeBackYouAlmostForgotMe {
    width: 378px;
    left: 929px;
    top: 170px;
    position: absolute;
    text-align: center;
    color: #0B0B0B;
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: 400;
}

.DonTHaveAnAccountCreateNowSignUp {
    width: 378px;
    left: 907px;
    top: 650px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Username {
    width: 108px;
    height: 28px;
    left: 813px;
    top: 300px;
    position: absolute;
    color: black;
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: 400;
}

.SignIn {
    left: 1057px;
    top: 600px;
    position: absolute;
    color: white;
    font-size: 24px;
    font-family: 'Poppins';
    font-weight: 500;
}

.SignUpLink {
    color: #007BFF;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 5px;
}
</style>
