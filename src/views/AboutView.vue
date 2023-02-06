<template>
  <div>
    <h1 class="text-lg font-bold mb-8">About</h1>

    <p>id: {{ getTurma.id }}</p>
    <p>Nome: {{ getTurma.name }}</p>
    <p>Numero: {{ getTurma.num }}</p>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { useTurmasStore } from '@/stores/turmas';

// const turmaStore = useTurmasStore();
const { getTurma } = useTurmasStore();
</script>

<style></style>
