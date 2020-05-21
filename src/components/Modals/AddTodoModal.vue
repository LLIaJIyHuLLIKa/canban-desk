<template>
    <div class="add-todo__modal">
        <div class="add-todo__modal-header">
            <h2>Добавление задачи</h2>
        </div>
        <div class="add-todo__modal-data">
            <label for="todo-title">Название задачи:</label><br/>
            <input v-model="title" type="text" id="todo-title" placeholder="Введите название задачи..." required>
            <label for="todo-text">Текст задачи:</label><br/>
            <textarea v-model="text" id="todo-text" placeholder="Введите текст задачи..." required></textarea>
        </div>
        <div class="add-todo__modal-buttons">
            <button @click="closeAddTodoModal" class="cancel">Отмена</button>
            <button @click="addTodo" class="submit">Добавить задачу</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import TodoItem from '../../store/TodoItemType';

export default Vue.extend({
    name: 'add-todo-modal',
    data() {
        return {
            title: '' as string,            // название задачи
            text: '' as string,             // текст задачи
        };
    },
    props: {
        groupId: Number,
    },
    methods: {
        closeAddTodoModal() {
            // закрытие модального окна добавления задачи
            this.$store.dispatch('setActiveAddTodoModalAction', false);
        },
        addTodo() {
            // добавление новой задачи
            if (this.title !== '' && this.text !== '') {
                let lastId: number = 1;

                if (this.todoGroups[this.groupId].todos.length > 0) {
                    const todos: TodoItem[] = this.todoGroups[this.groupId].todos;
                    lastId = todos[todos.length - 1].todoId + 1;
                }

                const newTodo: TodoItem = {
                    todoId: lastId,
                    todoTitle: this.title,
                    todoText: this.text,
                    completed: false,
                };

                const payload: object = {
                    groupId: this.groupId,
                    todo: newTodo,
                };

                this.$store.dispatch('addTodoAction', payload);
                this.$store.dispatch('setActiveAddTodoModalAction', false);
                this.title = '';
                this.text = '';
            }
        },
    },
    computed: {
        ...mapGetters({
            todoGroups: 'todoGroups',
        }),
    },
});
</script>

<style lang="scss" scoped>
.add-todo__modal {
  position: absolute;
  width: 50%;
  min-height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  z-index: 2;

  &-header {
      text-align: center;
  }

  &-data {
    padding: 0 35px;

    input, textarea {
      width: 100%;
      margin: 7px 0;
      padding: 3px 5px;
      border: 1px solid #ccc;

      &::placeholder {
        color: #ccc;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    textarea {
        height: 100px;
        resize: none;
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 35px;
    margin: 8px 0;

    button {
      padding: 5px 15px;
      border: 0;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }

    .cancel {
      background-color: #ff0000;
    }
    .submit {
      background-color: lightskyblue;
    }
  }
}
</style>