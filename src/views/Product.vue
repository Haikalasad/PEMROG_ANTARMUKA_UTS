<template>
  <v-app>
    <navbar />
    <v-main>
      <v-container>
        <div class="list-category">
          <p>Category :</p>
          <ul>
            <ul>
              <li><a href="#">Mouse</a></li>
              <li><a href="#">Keyboard</a></li>
              <li><a href="#">Headphone</a></li>
              <li><a href="#">Joystick</a></li>
            </ul>

          </ul>
        </div>
        <produk />
      </v-container>
      <footerSection />
    </v-main>


  </v-app>
</template>

<script setup>
import navbar from "@/components/navbar.vue"
import footerSection from "@/components/footer.vue"
import produk from "@/components/OurProducts.vue"

</script>
<style>
.list-category ul {
  display: flex;
  justify-content: center;
  list-style: none; /* Menghapus poin dari daftar */
  padding: 0;
}

.list-category li {
  text-align: center;
  font-size: 15px;
  margin: 0 10px; /* Jarak antara tautan */
  text-decoration: none;
  margin-top: 20px;
}

.list-category li a {
  text-decoration: none; /* Menghapus garis bawah default pada tautan */
  padding: 10px 20px; /* Atur ukuran tombol sesuai kebutuhan Anda */
  background-color: black; /* Warna latar belakang tombol */
  color: #fff; /* Warna teks tombol */
  border: none;
  border-radius: 5px; /* Mengatur sudut tombol */
  cursor: pointer; /* Mengubah ikon kursor menjadi tangan saat mengarah ke tombol */
  transition: background-color 0.3s; /* Animasi perubahan warna latar belakang */
}

.list-category li a:hover {
  background-color: gray; /* Warna latar belakang saat tombol dihover */
}

</style>
