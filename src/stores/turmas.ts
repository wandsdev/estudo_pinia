import { defineStore } from 'pinia';

export const useTurmasStore = defineStore('turmas', {
  state: () => ({
    turma: {
      id: null,
      name: '',
      num: '',
      nome: 'Joao',
      sobrenome: 'Silva',
    },
  }),
  actions: {
    setTurmas(turmas: any) {
      this.turma.id = turmas.id;
      this.turma.name = turmas.name;
      this.turma.num = turmas.num;
    },
  },
  getters: {
    getTurma(state) {
      return state.turma;
    },
  },
});
