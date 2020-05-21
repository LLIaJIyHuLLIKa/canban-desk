<template>
  <div class="todo-item">
    <div class="todo-item__title">
      <span>{{ todoItem.todoTitle }}</span>
    </div>
    <div class="todo-item__content">
      <span>{{ todoItem.todoText }}</span>
      <input type="checkbox" v-model="todoItem.completed" />
    </div>
    <div class="todo-item__delete">
      <span @click="deleteTodo">Удалить</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'todo-item',
  props: {
    todoItem: Object,
    todoIndex: Number,
    groupId: Number,
  },
  methods: {
    deleteTodo() {
      // удаление задачи
      const payload: object = {
        groupId: this.groupId,
        todoId: this.todoIndex,
      };

      this.$store.dispatch('deleteTodoAction', payload);
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-item {
  padding: 5px;
  background-color: #ccc;
  border: 1px solid #000;
  border-bottom: 0;

  &__title {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  &__content {
    font-size: 14px;
    margin-bottom: 15px;
    word-break: break-all;
  }

  &__delete {
    text-align: right;

    span {
      color: blue;
      font-size: 12px;
      
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>