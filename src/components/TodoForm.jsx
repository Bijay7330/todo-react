import React, { useState } from 'react'

const TodoForm = ({ handleAdd }) => {
    const [val, setVal] = useState("");

    function addTodo() {
        handleAdd(val)
        setVal('')
    }

    return (
        <div className='flex flex-row gap-2'>
            <input type="text" placeholder='Enter your task' value={val} onChange={(e) => setVal(e.target.value)}  className='border-[1px] w-[300px] h-[40px] pl-3 focus:outline-none rounded placeholder:text-white bg-white/20 backdrop-blur-[10px] text-white'/>
            <button onClick={addTodo} className=' px-4 py-2 bg-lime-600 text-white text-[14px] rounded'>Add</button>
        </div>
    )
}

export default TodoForm