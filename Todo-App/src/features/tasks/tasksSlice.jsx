
import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

let taskId = 1;

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: loadTasksFromLocalStorage(),
    reducers: {
        addTask: (state, action) => {
            state.push({id: taskId++, text:action.payload, isCompleted:false})
            saveTasksToLocalStorage(state)
        },
        deleteTask: (state, action) => {
            const newState = state.filter(tasks => tasks.id != action.payload)
            saveTasksToLocalStorage(newState)
            return newState
        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
              task.isCompleted = !task.isCompleted;
              saveTasksToLocalStorage(state)
            }
        },
        editTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
              task.text = action.payload.text;
              saveTasksToLocalStorage(state)
            }
          }
    }
})

export const {addTask, deleteTask, toggleTask, editTask} = tasksSlice.actions
export default tasksSlice.reducer