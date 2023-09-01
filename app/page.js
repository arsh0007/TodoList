"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title,desc }]);


    console.log(mainTask)
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0)
  {
    renderTask = mainTask.map((t,i)=>{
      return (
                <li key={i} className='flex items-center justify-between mb-5'>
                  <div className=' mb-5 w-2/3'>
                    <h5 className='text-2xl font-semibold'>{t.title}</h5>
                    <h6 className='text-l font-medium'>{t.desc}</h6>
                  </div>
                  <button
                  onClick={()=>{
                    deleteHandler(i)
                  }} 
                  className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
                    Delete
                  </button>
                </li>
              )
    })
  }

  return (
    <>
      <h1 
      className='bg-black text-white p-5 text-3xl font-bold text-center'
      >
        My Todo List
      </h1>
      
      <form onSubmit={submitHandler}>
        
        <input type="text" 
        className='m-5 border-zinc-50 text-xl px-4 py-2' 
        placeholder='Enter Task Here' 
        value={title} 
        onChange={(e)=>{ 
          settitle(e.target.value)
          console.log(e.value.target)
        }}/>

        <input type="text" 
        className='m-5 border-zinc-200 text-xl px-4 py-2' placeholder='Enter Description Here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
          console.log(e.value.target)
        }} />

        <button className='bg-black text-white px-4 py-2 text-xl font-bold rounded m-5'>
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200' >
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  )
}

export default page
