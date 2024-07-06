import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

export default function Input(){

    const[task, setTask] = useState('');
    const dispatch = useDispatch();

    // Handle Add Task
    const handleAddTask = (e) => {
        e.preventDefault();
        if(task.trim()){
            dispatch(addTask(task))
            setTask('')
        }
    }
    
    return(
        <>
            <form onSubmit={handleAddTask}  className="w-full my-4 flex flex-col gap-3 sm:flex-row">
                    <input type="text" 
                        value={task} 
                        onChange={(e) => setTask(e.target.value)} 
                        placeholder="Enter a task..."
                        className="w-full sm:w-4/6 p-2 border rounded-md"
                    />
                    <button type="submit" className="w-4/6 sm:w-2/6 mx-auto sm:mx-0 border p-2 rounded-md hover:bg-slate-200">Add Task</button>
            </form>
        </>
    )
}