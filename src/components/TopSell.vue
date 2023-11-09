<template>
    <div class="container">
      <v-card-text>
        <h2>Top Selling</h2>
      </v-card-text>
      <v-container>
        <v-row>
          <v-col v-for="(product) in product" :key="product.id" cols="12" sm="6" md="4">
            <v-card class="product-card">
              <v-img class="img" :src="product.foto" aspect-ratio="2/3"></v-img>
              <v-card-title>{{product.nama}}</v-card-title>
              <v-card-subtitle>Harga: Rp {{product.harga}}</v-card-subtitle>
              <v-card-text>Stok: {{product.stok}}</v-card-text>
              <v-card-text>Terjual: {{product.terjual}}</v-card-text>
              <div class="addToCart">
                <v-btn class="cart" color="black" @click="addToCart(product)">
                  Tambah ke Keranjang
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import product from "@/data/data.js"; // Sesuaikan dengan path yang sesuai
  
  export default {
    data() {
      // Urutkan data berdasarkan jumlah terjual, kemudian ambil tiga produk pertama
      const topThreeSelling = product.sort((a, b) => b.terjual - a.terjual).slice(0, 3);
  
      return {
        product: topThreeSelling,
      };
    },
  };
  </script>
  
  <style>
  h2 {
    font-size: 40px;
    border-bottom: 2px solid #000;
    margin-bottom: 40px;
  }
  .container {
    margin-top: 35px;
  }
  
  .addToCart {
    display: flex;
    width: 100%;
    background-color: black;
    text-align: center;
  }
  
  .cart {
    width: 100%;
  }
  
  .cart:hover {
    width: 100%;
    color: gray;
  }
  
  .product-card {
    width: 100%;
    max-width: 300px;
    margin: 10px;
  }
  
  .img {
    width: 100%;
    max-height: 200px;
  }
  </style>
  