import TodoItem from './TodoItemType';

export default class TodoGroup {
    public id: number;
    public title: string;
    public todos: TodoItem[];

    constructor() {
        this.id = 0;
        this.title = '';
        this.todos = [];
    }
}
