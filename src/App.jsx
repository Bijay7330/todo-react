// import React, { useState } from 'react'

// const App = () => {
//   const [todo, setTodo] = useState([]);
//   const [val, setVal] = useState("");

//   function handleAdd() {
//     console.log(val);
//     setTodo([...todo, { title: val, id: Date.now() }])
//     setVal('')
//   }
//   console.log(todo)

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input type="text" placeholder='Enter your task' value={val} onChange={(e) => setVal(e.target.value)} />
//       <button onClick={handleAdd}>Add</button>
//       {
//         todo.map((item) => <p key={item.id}>{item.title}</p>)
//       }
//     </div>
//   )
// }

// export default App



// //seperate files
// import React, { useState } from 'react'
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

// const App = () => {
//   const [todo, setTodo] = useState([]);

//   function handleAdd(val) {
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }
//   console.log(todo)

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm handleAdd={handleAdd} />
//       <TodoList todo={todo}/>

//     </div>
//   )
// }

// export default App


//delete
// import React, { useState } from 'react'
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

// const App = () => {
//   const [todo, setTodo] = useState([]);

//   function handleAdd(val) {
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }
//   console.log(todo)

//   function handleTodo(id) {
//         console.log(id)
//          setTodo(todo.filter((item)=>item.id !== id))
//     }


//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm handleAdd={handleAdd} />
//       <TodoList todo={todo} handleTodo={handleTodo} />

//     </div>
//   )
// }
// export default App


//local storage
// import React, { useEffect, useState } from 'react'
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

// const App = () => {
// // const [todo, setTodo] = useState([])

//  const [todo, setTodo] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   function handleAdd(val) {
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }
//   console.log(todo)

//   function handleTodo(id) {
//         console.log(id)
//          setTodo(todo.filter((item)=>item.id !== id))
//     }


//     useEffect(()=>{
//       localStorage.setItem('todos', JSON.stringify(todo));
//     }, [todo])


//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm handleAdd={handleAdd} />
//       <TodoList todo={todo} handleTodo={handleTodo} />

//     </div>
//   )
// }
// export default App


// // Delete using modal
// import React, { useEffect, useState } from 'react'
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import DeleteModal from './components/DeleteModal';

// const App = () => {
//   const [delModal, setDelModal] = useState(false)
//   const [todoToDel, setTodoToDel] = useState(null)

//   const [todo, setTodo] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });
//   function handleAdd(val) {
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }
//   console.log(todo)

//   const handleDelete = (id) => {
//     setDelModal(true)
//     setTodoToDel(id)
//   }

//   const cancelDel = () => {
//     setDelModal(false)
//     setTodoToDel(null)
//   }


//   const confirmDel = () => {

//     setTodo(todo.filter((item) => item.id !== todoToDel))

//     setDelModal(false)
//     setTodoToDel(null)
//   }




//   // function handleTodo(id) {
//   //       console.log(id)
//   //        setTodo(todo.filter((item)=>item.id !== id))
//   //   }


//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todo));
//   }, [todo])


//   return (
//     <div className='mt-4 py-3 px-4 bg-white/20 backdrop-blur-[10px] rounded'>
//       <h1 className='text-white text-[30px] text-center mb-3'>Todo App</h1>
//       <TodoForm handleAdd={handleAdd} />
//       <TodoList todo={todo} handleDelete={handleDelete} />

//       {delModal && <DeleteModal cancelDel={cancelDel}  confirmDel={confirmDel}/>}
//     </div>
//   )
// }
// export default App




//Update with modals

import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import DeleteModal from './components/DeleteModal';
import UpdateModals from './components/UpdateModals';

const App = () => {
  const [delModal, setDelModal] = useState(false)
  const [todoToDel, setTodoToDel] = useState(null)


  const [editModal, setEditModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(null)


  // const [todo, setTodo] = useState([]);
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  function handleAdd(val) {
    setTodo([...todo, { title: val, id: Date.now() }])
  }
  console.log(todo)

  // Delete
  const handleDelete = (id) => {
    setDelModal(true)
    setTodoToDel(id)
  }

  const cancelDel = () => {
    setDelModal(false)
    setTodoToDel(null)
  }


  const confirmDel = () => {

    setTodo(todo.filter((item) => item.id !== todoToDel))

    setDelModal(false)
    setTodoToDel(null)
  }

  //Update

  const handleUpdate = (todo) => {
    setEditModal(true)
    setTodoToEdit(todo)
  }

  const cancelEdit = () => {
    setEditModal(false)
    setTodoToEdit(null)
  }

  const confirmEdit = (newText) => {
    setTodo(todo.map((item) => item.id === todoToEdit.id ? { ...item, title: newText } : item))
    setEditModal(false)
    setTodoToEdit(null)

  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo])


  return (
    <div className='mt-4 py-3 px-4 bg-white/20 backdrop-blur-[10px] rounded'>
      <h1 className='text-white text-[30px] text-center mb-3'>Todo App</h1>
      <TodoForm handleAdd={handleAdd} />
      <TodoList todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />

      {delModal && <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />}
      {editModal && <UpdateModals cancelEdit={cancelEdit} confirmEdit={confirmEdit} currentText={todoToEdit.title} />}
    </div>
  )
}
export default App

