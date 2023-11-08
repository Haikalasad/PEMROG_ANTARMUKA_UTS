<template>
  <v-app>
    <navbar/>
    <v-main>
      <v-container>
        <herosection/>
      </v-container>
      <v-container>
        <produk/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import navbar from "@/components/navbar.vue"
import herosection from "@/components/Hero-section.vue"

import produk from "@/components/OurProducts.vue"

</script>