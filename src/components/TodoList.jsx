// import React from 'react'

// const TodoList = ({todo}) => {
//     return (
//         <div>

//             {
//                 todo.map((item) => <p key={item.id}>{item.title} <button>Del</button> <button>Edit</button></p>)
//             }
//         </div>
//     )
// }

// export default TodoList



// import React from 'react'

// const TodoList = ({ todo, handleDelete }) => {


//     function delTodo(id) {
//        handleDelete(id)
//     }
//     return (
//         <div>

//             {
//                 todo.map((item) => <div className=' mt-2 w-full py-2 px-1 bg-white/30 text-[14px] flex justify-between items-center rounded text-white' key={item.id}>{item.title}  <div className='flex justify-between items-center gap-1'><button className='py-2 px-3 text-[12px] text-white bg-red-600 rounded' onClick={()=>delTodo(item.id)}>Del</button> <button className='py-2 px-3 text-[12px] text-white bg-gray-500 rounded' >Edit</button></div> </div>)
//             }
//         </div>
//     )
// }

//export default TodoList



import React from 'react'

const TodoList = ({ todo, handleDelete , handleUpdate}) => {


    function delTodo(id) {
       handleDelete(id)
    }
    return (
        <div>

            {
                todo.map((item) => <div className=' mt-2 w-full py-2 px-1 bg-white/30 text-[14px] flex justify-between items-center rounded text-white' key={item.id}>{item.title}  <div className='flex justify-between items-center gap-1'><button className='py-2 px-3 text-[12px] text-white bg-red-600 rounded' onClick={()=>delTodo(item.id)}>Del</button> <button className='py-2 px-3 text-[12px] text-white bg-gray-500 rounded' onClick={()=>handleUpdate(item)}>Edit</button></div> </div>)
            }
        </div>
    )
}

export default TodoList