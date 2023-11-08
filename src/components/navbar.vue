<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>GameWorld</v-app-bar-title>
    <v-spacer></v-spacer>

    <div class="title d-flex justify-center">
      <router-link to="/" class="title" active-class="active-link">Home</router-link>
      <router-link to="/cart" class="title" active-class="active-link">Cart</router-link>
      <router-link to="/about" class="title" active-class="active-link">About</router-link>
    </div>

    <v-spacer></v-spacer>

    <v-text-field
      v-slot:prepend
      prepend-inner-icon="mdi-magnify"
      label="Search products"
      variant="solo"
      single-line
      hide-details
      flat
    ></v-text-field>
  </v-app-bar>
</template>

<style>
.title:hover {
  color: gray;
}
.title{
  padding: 20px;
  text-decoration: none;
  color: black;
}
.active-link {
  font-weight: bold;
  text-decoration: none;
  color: Black; /* Ubah warna sesuai preferensi Anda */
  padding: auto;

}
</style>
