import Input from "./Components/Input"
import TodoList from "./Components/TodoList"

export default function App(){

  return(
    <>
      <div className="w-screen h-screen flex justify-center py-12">
          <div className="w-4/6 sm:w-3/6 md:w-2/6 h-5/6">
            <Input />       
            <TodoList />
          </div>
      </div>

    </>
  )
}