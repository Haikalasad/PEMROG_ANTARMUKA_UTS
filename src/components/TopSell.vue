<template>
    <div class="container">
        <v-card-text>
            <h2>Top Sell</h2>
        </v-card-text>
        <v-app>
            <v-container>
                <v-row>
                    <v-col v-for="(topsell) in topsell" :key="topsell.id" cols="12" sm="6" md="4">
                        <v-card class="topsell-card">
                            <v-img class="img" :src="topsell.foto" aspect-ratio="2/3"></v-img>
                            <v-card-tittle>{{topsell.nama}}</v-card-tittle>
                            <v-card-subtittle>Harga: Rp {{topsell.harga}}</v-card-subtittle>
                            <v-card-text>Stok: {{topsell.stok}}</v-card-text>
                            <v-card-text>Terjual: {{topsell.terjual}}</v-card-text>
                            <div class="addToCart">
                                <v-btn class="cart" color="black" @click="addToCart">
                                    Tambah ke Keranjang
                                </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>

import Mouse3 from "@/assets/Mouse3.jpg";
import Mouse4 from "@/assets/Mouse4.jpg";
import Mouse5 from "@/assets/Mouse5.jpg";

export default {
    data() {
        return {
        topsell: [
            {
            id: 1,
            nama: "Gaming mouse RGB",
            harga: 50000,
            stok: 50,
            foto: Mouse3,
            terjual: 50
            },
            {
            id: 2,
            nama: "ROG Gaming Mouse",
            harga: 500000,
            stok: 20,
            foto: Mouse4,
            terjual: 30
            },
            {
            id: 3,
            nama: "ROG Gaming Mouse",
            harga: 500000,
            stok: 20,
            foto: Mouse5,
            terjual: 30
            },
        ],
        };
    },
};
</script>

<style>
h2{
  font-size: 40px;
  border-bottom: 2px solid #000;
  margin-bottom: 40px;
}
.container {
  margin-top: 35px;
}

.addToCart{
  display: flex;
  width: 100%;
  background-color: black;
  text-align: center;
}

.cart{
  width: 100%;
}
.cart :hover{
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