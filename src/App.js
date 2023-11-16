import { useState } from "react";
import "./style.css"

function App() {
const [newItem, setNewItem] = useState("")

const [todos, setTodos] = useState([])



function handleSubmit(e) {
  e.preventDefault()  // prevent it from refreshing / auto-submitting

//setTodos job is to get the todos just added in the form (newItem)

// The moment you press the add button and submit, the newItem now becomes (todos)
//setTodos is a function that wants to get the todos, the todos.id and to show its unchecked 
  setTodos(currentTodos => {
    return[
      ...currentTodos,
      {id: crypto.randomUUID(), title: newItem, completed: false}
    ] 
  })

// todos = title = newItem

setNewItem("")  //After submiting and getting the todos, let the newItem value be empty.

}


function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id){   // this is true
        return { ...todo, completed }   //checkbox is clicked based on the fact that it is true
      }

return todo


    })
  })
}



function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)// Expected output: false. //Since its false(delete)
  })
}



 return (
<>

 <form onSubmit = {handleSubmit} className="new-item-form">

<div className="form-row">
<label htmlFor="item">New Item</label>

{/*Whatever value is inputed in the box now takes newItem */}
<input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
</div>
{/*setNewItem is a function dt gets the value inputed(e.target.value), then the value is given to {newItem} */}
{/*Whatever setNewItem function does is given to the variable newItem  */}
<button className="btn">Add</button>
 </form>



<h1 className="header">Todo List</h1>

<ul className="list">
  {todos.map(todo => {

// for each todo, please be in a list
return( 

<li key = {todo.id}>
<label>

{/* If todo.completed is true, then the checkbox is checked */}
<input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
{todo.title}  {/* The value of the newItem / the todo itself*/}
</label>


  <button onClick={() => deleteTodo(todo.id)}
   className="btn btn-danger">Delete</button>
  </li>
)
})}
</ul>

</>
 )
}

export default App;
