<template>
  <div class="todo-filters">
    <input
      v-model="cardTitle"
      type="text"
      placeholder="Введите название карточки..."
    />
    <label for="filter-status">Статус:</label>
    <select v-model="status" id="filter-status">
      <option disabled value="">Выберите статус карточек---</option>
      <option>Не выполнено</option>
      <option>Выполнено</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'todo-filters',
  data() {
    return {
      cardTitle: '', // название карточки
      status: '', // статус карточки
    };
  },
  watch: {
    cardTitle() {
      this.$store.dispatch('setCardTitleAction', this.cardTitle);
    },
    status() {
      this.$store.dispatch('setStatusAction', this.status);
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-filters {
  text-align: right;
  margin-bottom: 15px;
  padding-right: 10px;

  input {
    width: 350px;
    padding: 5px 8px;
    margin-right: 10px;
    border-radius: 15px;
    border: 1px solid #ccc;
  }

  select {
    margin-left: 10px;
  }
}
</style>
