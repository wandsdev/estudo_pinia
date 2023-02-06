<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="w-10/12 mx-auto">
    <header>
      <nav class="w-full bg-cyan-500 text-white p-4 flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <div class="bg-slate-100 p-8 rounded-lg mt-8">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
