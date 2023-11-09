<template>
<div class="container">
  <div class="logo">
    <img src="../assets/logo3.jpg" alt="logo">
  </div>
  <div class="sidebar">
    <div class="judul">
        <h1 class="judul-text">It looks like we got a new member here!!</h1>
    </div>
    <div class="title">
        <div class="title-text">You are kindly requested to fill in the form below</div>
    </div>
    <div class="email">
        <div class="email-label">Email *</div>
        <div class="eml">
            <input type="text" placeholder="" />
        </div>
        <div class="username">
            <div class="username-label">Username *</div>
            <div class="usn">
                <input type="text" placeholder="" />
            </div>
            <div class="password">
                <div class="password-label">Password *</div>
            </div>
        </div>
        <div class="psw">
            <input type="password" placeholder="" />
        </div>
        <div class="signup">
            <router-link to="/home" class="link">Sign Up</router-link>
        </div>
        </div>
        <div class="signin">
            <button>Already have an account? Sign in now Sign in</button>
        </div>

  </div>
   

</div>
    
</template>
<script>

</script>

<style>
.logo {
    width:50%;
    height: 100%;
    left: 0px;
    top: 1px;
}

.judul-text {
    position: absolute;
    width: 798px;
    height: 256px;
    left: 786px;
    top: 70px;
    font-size: 60px;
}

.title-text {
    position: absolute;
    width: 511px;
    height: 30px;
    left: 786px;
    top: 260px;
    color: #797979;


}

.email-label {
    position: absolute;
    width: 108px;
    height: 28px;
    left: 786px;
    top: 317px;
}

.eml input {
    box-sizing: border-box;
    position: absolute;
    width: 605px;
    height: 52px;
    left: 790px;
    top: 356px;
    border: 1px solid #B5B5B5;
}

.username-label {
    position: absolute;
    width: 120px;
    height: 28px;
    left: 786px;
    top: 446px;
}

.usn input {
    box-sizing: border-box;
    position: absolute;
    width: 605px;
    height: 52px;
    left: 790px;
    top: 490px;
    border: 1px solid #B5B5B5;
}

.password-label {
    position: absolute;
    width: 120px;
    height: 28px;
    left: 786px;
    top: 580px;
}

.psw input {
    box-sizing: border-box;
    position: absolute;
    width: 605px;
    height: 52px;
    left: 790px;
    top: 626px;
    border: 1px solid #B5B5B5;
}

.signup {
    box-sizing: border-box;
    position: absolute;
    width: 558px;
    height: 67px;
    left: 814px;
    top: 754px;
    background: #151515;
    color: white;
    border: 1px solid #B5B5B5;
    text-align: center;
    text-decoration: none

}
.link{
    color: white;
    text-decoration: none;
    position: absolute;
    justify-content: center;
    top: 20px;
    left: 250px;
}

.signin button {
    position: absolute;
    width: 378px;
    height: 24px;
    left: 904px;
    top: 842px;

}
</style>