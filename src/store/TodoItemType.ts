export default class TodoItem {
    public todoId: number;
    public todoTitle: string;
    public todoText: string;
    public completed: boolean;

    constructor() {
        this.todoId = 0;
        this.todoTitle = '';
        this.todoText = '';
        this.completed = false;
    }
}
