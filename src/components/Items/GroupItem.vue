<template>
  <div class="group-item">
    <div class="group-item__title">
      <span>{{ group.title }}</span>
      <div @click="deleteGroup" class="group-item__title-delete">
        <span>X</span>
      </div>
    </div>
    <div v-if="group.todos.length > 0" class="group-item__todos">
      <todo-item
        v-for="(todo, index) in filteredTodos"
        :key="todo.todoId"
        :todoItem="todo"
        :todoIndex="index"
        :groupId="groupIndex"
      ></todo-item>
    </div>
    <div @click="openAddTodoModal" class="group-item__add">
      <span>Добавить задачу</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from './TodoItem.vue';
import TodoItemType from '../../store/TodoItemType';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'group-item',
  props: {
    group: Object,
    groupIndex: Number,
  },
  components: {
    TodoItem,
  },
  methods: {
    openAddTodoModal() {
      // открытие модального окна добавления задачи
      this.$store.dispatch('setActiveAddTodoModalAction', true);
      this.$store.dispatch('setGroupIndexAction', this.groupIndex);
    },
    deleteGroup() {
      // удаление группы
      this.$store.dispatch('deleteTodoGroupAction', this.groupIndex);
    },
  },
  computed: {
    ...mapGetters({
      todoGroups: 'todoGroups',
      activeAddTodoModal: 'activeAddTodoModal',
      cardTitle: 'cardTitle',
      status: 'status',
    }),

    filteredTodos() {
      // фильтрация данных
      let filtered: TodoItemType[] = this.group.todos;

      filtered = filtered.filter(   // фильтр по названию карточки
        (todo) =>
          this.cardTitle === '' ||
          todo.todoTitle.toLowerCase().indexOf(this.cardTitle.toLowerCase()) !==
            -1
      ).filter((todo) => {    // фильтр по статусу
        if (this.status !== '') {
          if (this.status === 'Не выполнено') {
            return todo.completed === false;
          } else {
            return todo.completed === true;
          }
        } else {
          return true;
        }
      });

      return filtered;
    },
  },
});
</script>

<style lang="scss" scoped>
.group-item {
  display: inline-block;
  width: 200px;
  margin-left: 20px;

  &__title {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    text-align: center;

    &-delete {
      position: absolute;
      top: -2px;
      left: -5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #f00;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
  }

  &__add {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
    color: #ccc;
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
      color: lightgreen;
    }
  }
}
</style>
