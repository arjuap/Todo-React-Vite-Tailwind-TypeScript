import { useState } from "react"
interface AddTodoFromProps{
    onSubmit: (title: string)=>void
}

export default function AddTodoForm({onSubmit}: AddTodoFromProps){
    const [input,setInput] = useState("")
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault(); 
        
        if (!input.trim()) return

        onSubmit(input)
        setInput("")


    }
    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Your work" className="w-full p-2 rounded-s-md" />
            <button type="submit" className="bg-slate-900 w-16 rounded-e-md text-white hover:bg-slate-700">Add</button>
        </form>
    )
}