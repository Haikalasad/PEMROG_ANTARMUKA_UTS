<template>
  <div class="hero-section">
    <div class="sentence">
      <h1>Welcome to GameWorld Pro !!!</h1>
      <h5>Your Ultimate Gaming Destination! Elevate Your Experience with Us.</h5>
      <v-btn class="explore" color="black">Explore now</v-btn>
    </div>

    <div class="image">
      <img src="../assets/hero-section.jpg"> <!-- Ganti URL_GAMBAR_ANDA dengan URL gambar yang sesuai -->
    </div>
  </div>
</template>

<style>
.hero-section {
  display: flex;
  justify-content: center; /* Menggeser ke tengah secara horizontal */
  align-items: center; /* Menggeser ke tengah secara vertikal */
  width: 1250px;
height: 453px;
  /* Tidak perlu lagi mengatur width atau margin: 0 auto; */
  line-height: 100px;
  
}

.sentence {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  line-height: 2;
  /* Mengatur teks di tengah secara horizontal */
}

.explore {
  background: #151515;
  margin-top: 20px;
  width: 200px;
  height: 200px;
  transition: background-color 0.3s ease;
  text-align: center; /* Mengatur teks di tengah tombol */
  display: flex;
  align-items: center;
  justify-content: center;
  
}

h1 {
  color: #0B0B0B;
  font-size: 68px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
}

h5 {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}

.explore:hover {
  background: #000;
}

.image {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  margin:  auto;
}




</style>
