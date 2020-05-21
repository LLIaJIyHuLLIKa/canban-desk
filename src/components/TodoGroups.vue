<template>
  <div class="todo-groups">
    <todo-filters></todo-filters>
    <group-item
      v-for="(group, index) in todoGroups"
      :key="group.id"
      :group="group"
      :groupIndex="index"
    ></group-item>
    <div @click="openAddGroupModal" class="todo-groups__add">
      <span>+</span><br/>
      <span>добавить группу</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import GroupItem from './Items/GroupItem.vue';
import TodoFilters from './TodoFilters.vue';

export default Vue.extend({
  name: 'todo-groups',
  components: {
    GroupItem,
    TodoFilters,
  },
  methods: {
    openAddGroupModal() {
      // открытие модального окна добавления группы
      this.$store.dispatch('setActiveAddGroupModalAction', true);
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
.todo-groups {
  &__add {
    display: inline-block;
    width: 200px;
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid #ccc;
    text-align: center;
    color: #ccc;
    transition: 0.3s all;
    cursor: pointer;

    span {
      font-size: 14px;

      &:first-child {
        font-size: 18px;
      }
    }

    &:hover {
      color: lightgreen;
    }
  }
}
</style>