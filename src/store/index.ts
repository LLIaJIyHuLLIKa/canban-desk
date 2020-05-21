import Vue from 'vue';
import Vuex from 'vuex';
import TodoGroup from './TodoGroupType';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoGroups: Array<TodoGroup>(),       // список групп с задачами
    activeAddGroupModal: false as boolean,
    activeAddTodoModal: false as boolean,
    groupIndex: 0 as number,        // индекс группы, в которую будут добавляться задачи
    cardTitle: '' as string,        // название карточки
    status: '' as string,           // статус карточек
  },
  mutations: {
    addTodoGroup(state, todoGroup: object) {
      // добавление группы задач
      state.todoGroups.push(todoGroup as TodoGroup);
    },
    deleteTodoGroup(state, id: number) {
      // удаление группы задач
      state.todoGroups.splice(id, 1);
    },
    addTodo(state, payload) {
      // добавление новой задачи в группу
      state.todoGroups[payload.groupId].todos.push(payload.todo);
    },
    deleteTodo(state, payload) {
      // удаление задачи
      state.todoGroups[payload.groupId].todos.splice(payload.todoId, 1);
    },
    setActiveAddGroupModal(state, activeAddGroupModal: boolean) {
      // открытие / закрытие модального окна добавления группы задач
      state.activeAddGroupModal = activeAddGroupModal;
    },
    setActiveAddTodoModal(state, activeAddTodoModal: boolean) {
      // открытие / закрытие модального окна добавления группы задач
      state.activeAddTodoModal = activeAddTodoModal;
    },
    setGroupIndex(state, groupIndex: number) {
      // изменение индекса группы
      state.groupIndex = groupIndex;
    },
    setCardTitle(state, cardTitle: string) {
      // изменение названия карточки
      state.cardTitle = cardTitle;
    },
    setStatus(state, status: string) {
      // изменение статуса карточек
      state.status = status;
    },
  },
  actions: {
    addTodoGroupAction({commit}, todoGroup) {
      commit('addTodoGroup', todoGroup);
    },
    deleteTodoGroupAction({commit}, id) {
      commit('deleteTodoGroup', id);
    },
    addTodoAction({commit}, payload) {
      commit('addTodo', payload);
    },
    deleteTodoAction({commit}, payload) {
      commit('deleteTodo', payload);
    },
    setActiveAddGroupModalAction({commit}, activeAddGroupModal) {
      commit('setActiveAddGroupModal', activeAddGroupModal);
    },
    setActiveAddTodoModalAction({commit}, activeAddTodoModal) {
      commit('setActiveAddTodoModal', activeAddTodoModal);
    },
    setGroupIndexAction({commit}, groupIndex) {
      commit('setGroupIndex', groupIndex);
    },
    setCardTitleAction({commit}, cardTitle) {
      commit('setCardTitle', cardTitle);
    },
    setStatusAction({commit}, status) {
      commit('setStatus', status);
    },
  },
  getters: {
    todoGroups: (state) => state.todoGroups,
    activeAddGroupModal: (state) => state.activeAddGroupModal,
    activeAddTodoModal: (state) => state.activeAddTodoModal,
    groupIndex: (state) => state.groupIndex,
    cardTitle: (state) => state.cardTitle,
    status: (state) => state.status,
  },
  plugins: [createPersistedState()],
});
