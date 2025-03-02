// 1. Define the TodoItem interface
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

// 2. Implement the TodoList class
class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  // Add a new todo item
  addTodo(task: string, dueDate: Date): void {
    const newTodo: TodoItem = {
      id: this.nextId++,
      task,
      completed: false,
      dueDate,
    };
    this.todos.push(newTodo);
    console.log(`Added: "${task}"`);
  }

  // Mark a todo item as completed
  completeTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`Completed: "${todo.task}"`);
    } else {
      console.log(`Todo with ID ${id} not found.`);
    }
  }

  // Remove a todo item
  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(`Removed todo with ID ${id}`);
  }

  // List all todo items
  listTodos(): TodoItem[] {
    return this.todos;
  }

  // Filter todos by completed status
  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter((todo) => todo.completed === completed);
  }

  // Update the task description of a todo item
  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.task = newTask;
      console.log(`Updated: "${newTask}"`);
    } else {
      console.log(`Todo with ID ${id} not found.`);
    }
  }

  // Clear all completed todos
  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
    console.log("Cleared all completed todos.");
  }
}

// Example usage
const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript", new Date("2024-03-10"));
myTodos.addTodo("Build a project", new Date("2024-03-15"));
console.log(myTodos.listTodos());
myTodos.completeTodo(1);
console.log(myTodos.filterTodos(true));
myTodos.updateTodo(2, "Build an advanced TypeScript project");
myTodos.clearCompleted();
console.log(myTodos.listTodos());
