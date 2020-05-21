<template>
  <div class="add-group__modal">
    <div class="add-group__modal-header">
      <h2>Добавление группы</h2>
    </div>
    <div class="add-group__modal-input">
      <input
        v-model="groupTitle"
        type="text"
        placeholder="Введите название группы..."
        required
      />
      <div v-if="emptyTitle===true" class="empty__description">
          <span>Введите название группы!</span>
      </div>
    </div>
    <div class="add-group__modal-buttons">
      <button @click="closeAddGroupModal" class="cancel">Отмена</button>
      <button @click="addGroup" class="submit">Добавить группу</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'add-group-modal',
  data() {
    return {
      groupTitle: '' as string,
      emptyTitle: false as boolean,
    };
  },
  methods: {
    closeAddGroupModal() {
      // закрытие модального окна
      this.$store.dispatch('setActiveAddGroupModalAction', false);
    },
    addGroup() {
      // добавление группы с задачами
      if (this.groupTitle !== '') {
        let lastId: number = 1;

        if (this.todoGroups.length > 0) {
          lastId = this.todoGroups[this.todoGroups.length - 1].id + 1;
        }

        const newGroup: object = {
          id: lastId,
          title: this.groupTitle,
          todos: [],
        };

        this.$store.dispatch('addTodoGroupAction', newGroup);
        this.$store.dispatch('setActiveAddGroupModalAction', false);
        this.groupTitle = '';
      } else {
          this.emptyTitle = true;
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
.add-group__modal {
  position: absolute;
  width: 50%;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  z-index: 2;

  &-header {
    text-align: center;
  }

  &-input {
    margin-top: 10px;
    text-align: center;

    input {
      width: 90%;
      padding: 3px 5px;
    }

    .empty__description {
        margin-top: 10px;
        margin-left: 35px;
        color: #f00;
        font-size: 12px;
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 35px;

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
