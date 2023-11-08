<template>
    <v-app-bar flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>GameShop</v-app-bar-title>
      <v-spacer></v-spacer>
  
      <div class="d-flex justify-center">
        <v-btn class="title">Home</v-btn>
        <v-btn class="title">Cart</v-btn>
        <v-btn class="title">About</v-btn>
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
.title :hover{
    color: gray;
}

</style>