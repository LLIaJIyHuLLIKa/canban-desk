<template>
    <div class="add-first">
        <div class="add-first__description">
            <span>На данный момент нет групп с задачами</span>
        </div>
        <div @click="openAddGroupModal" class="add-first__creation">
            <span>+</span><br/>
            <span>добавить новую группу</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'add-first-group',
    methods: {
        openAddGroupModal() {
            // открытие модального окна добавления группы
            this.$store.dispatch('setActiveAddGroupModalAction', true);
        },
    },
    computed: {
        ...mapGetters({
            activeAddGroupModal: 'activeAddGroupModal',
        }),
    },
});
</script>

<style lang="scss" scoped>
.add-first {
    max-width: 1170px;
    padding: 10px;
    margin: 0 auto;

    &__description {
        text-align: center;
        color: #ccc;
    }

    &__creation {
        width: 70%;
        margin: 10px auto 0 auto;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 16px;
        transition: 0.3s all;
        cursor: pointer;

        span:first-child {
            font-size: 20px;
        }

        &:hover {
            color: lightgreen;
        }
    }
}
</style>