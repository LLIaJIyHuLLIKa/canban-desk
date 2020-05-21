<template>
    <div class="canban-main">
        <header class="canban-main__header">
            <h1>Доска задач</h1>
        </header>
        <add-first-group v-if="todoGroups.length === 0"></add-first-group>
        <todo-groups v-else></todo-groups>
        <add-group-modal v-show="activeAddGroupModal===true"></add-group-modal>
        <add-todo-modal v-show="activeAddTodoModal===true" :groupId="groupIndex"></add-todo-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import AddFirstGroup from './AddFirstGroup.vue';
import TodoGroups from './TodoGroups.vue';
import AddGroupModal from './Modals/AddGroupModal.vue';
import AddTodoModal from './Modals/AddTodoModal.vue';

export default Vue.extend({
    name: 'canban-main',
    components: {
        AddFirstGroup,
        TodoGroups,
        AddGroupModal,
        AddTodoModal,
    },
    computed: {
        ...mapGetters({
            todoGroups: 'todoGroups',
            activeAddGroupModal: 'activeAddGroupModal',
            activeAddTodoModal: 'activeAddTodoModal',
            groupIndex: 'groupIndex',
        }),
    },
});
</script>

<style lang="scss" scoped>
.canban-main {
    &__header {
        text-align: center;
    }
}
</style>