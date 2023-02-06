<template>
  <div>
    <h1 class="text-lg font-bold mb-8">Home</h1>

    <div class="flex gap-2">
      <div @click="onClickCard(t)" v-for="t in turmas" :key="t.id" class="bg-white shadow-md w-32 p-4 rounded-md cursor-pointer">
        <p>{{ t.name }}</p>
        <p>{{ t.num }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTurmasStore } from '@/stores/turmas';

const turmasStore = useTurmasStore();
const router = useRouter();

const turmas = ref([
  { id: 1, name: 'Turma 1', num: '312' },
  { id: 2, name: 'Turma 2', num: '478' },
  { id: 3, name: 'Turma 3', num: '784' },
  { id: 4, name: 'Turma 4', num: '125' },
]);

function onClickCard(turma: any) {
  turmasStore.setTurmas(turma);
  router.push('/about');
}
</script>

<style scoped></style>
