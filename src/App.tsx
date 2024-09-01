import AddTodoForm from "./components/form";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodo";

function App() {
  const {todos,addTodo,setTodoCompleted,deleteAllCompletedTodos,deleteTodo} =useTodo();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-5 space-y-7">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompleteChange={setTodoCompleted} onDelete={deleteTodo}/>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>

  );
}

export default App
