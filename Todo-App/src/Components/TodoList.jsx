import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask, editTask } from "../features/tasks/tasksSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdSave } from "react-icons/io";

export default function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskText(task.text);
  };
  
  const handleSaveEdit = (taskId) => {
    dispatch(editTask({ id: taskId, text: editingTaskText }));
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <>
      <div className="w-full h-full overflow-scroll">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3 px-4 py-2 border rounded-lg justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleToggle(task.id)}
              />
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className={`font-semibold ${task.isCompleted ? "line-through text-slate-200" : ""}`}>
                  {task.text}
                </p>
              )}
            </div>
            <div className="flex-4">
            {editingTaskId === task.id ? (
                <>
                  <button onClick={() => handleSaveEdit(task.id)} className="p-2 hover:bg-slate-200 hover:rounded-full"><IoMdSave /></button>
                  <button onClick={handleCancelEdit} className="p-2 hover:bg-slate-200 hover:rounded-full"><IoIosCloseCircleOutline /></button>
                </>
              ) : (
                <>
                   {!task.isCompleted && <button onClick={() => handleEdit(task)} className="p-2 hover:bg-slate-200 hover:rounded-full"><MdOutlineModeEdit /></button>}
                   <button onClick={() => handleDelete(task.id)} className="p-2 hover:bg-slate-200 hover:rounded-full"><IoIosCloseCircleOutline /></button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
