// import React from 'react'
// import TodoItem from './TodoItem';

// function Todos(props) {
//   let myStyle ={
//     minHeight:'70vh',
//     margin:'50px auto',
//   }
//   return (
//     <div className="container" style={myStyle}>
//       <h3 className=' my-3'>Todos List</h3>
//       {/* {props.todos} */}
//         {props.todos.length ===0? 'No todos to display':
//         props.todos.map((todo)=>{
//           return(
//           <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/> 
//            )
//         })
//         }
//     </div>
//   )
// }

// export default Todos


// Todos.jsx
import React from 'react'
import TodoItem from './TodoItem';

function Todos(props) {
  let myStyle ={
    minHeight:'70vh',
    margin:'50px auto',
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className=' my-3'>Todos List</h3>
        {props.todos.length === 0 ? 'No todos to display' :
        props.todos.map((todo, index) => { // Add index parameter
          return (
            <TodoItem key={index} todo={todo} onDelete={props.onDelete}/> // Use index as key
          )
        })
        }
    </div>
  )
}

export default Todos
