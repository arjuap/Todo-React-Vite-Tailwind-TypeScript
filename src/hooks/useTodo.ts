import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodo(){
    const [todos,setTodos] = useState(()=>{
        const savedTodos: Todo[] =JSON.parse(localStorage.getItem("todos") || "[]")
        return savedTodos.length > 0 ? savedTodos : dummyData;
      })
    
    
      useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    
      },[todos])
    
      function setTodoCompleted(id: number,completed:boolean){
        setTodos((prevTodos)=> prevTodos.map((todo)=>(todo.id===id ? {...todo,completed}: todo)))
        // alert(`Todo with id ${id} is now ${completed ? "completed":"not completed"}`)
      }
    
      function addTodo(title: string){
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            id: Date.now(),
            title,
            completed: false,
          },
        ]);
      }
      function deleteTodo(id: number) {
        setTodos((prevTodos) => 
            prevTodos.filter((todo) => todo.id !== id)
        );
    }
      function deleteAllCompletedTodos(){
        setTodos((prevTodos)=> prevTodos.filter((todo)=>!todo.completed))
      }
    
      return{
        todos,setTodoCompleted,addTodo,deleteAllCompletedTodos,deleteTodo
      }
}