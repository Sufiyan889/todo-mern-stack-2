import axios from 'axios';
import React, { useState } from 'react';

const TodoListLayout = () => {
const [inputvalue,setinputvalue]= useState()
const [todos,settodos] = useState([])
const post = async ()=>{
    console.log(inputvalue)
    await axios.post("https://todo-mern-stack-2-6xdj.onrender.com/api/todos/",{
      text: inputvalue,})
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    const getdata = await axios.get("https://todo-mern-stack-2-6xdj.onrender.com/api/todos/")
    settodos(getdata.data)
    console.log(todos)
}
const deletetodo = async (id) => {
  try {
    await axios.delete(
      `https://todo-mern-stack-2-6xdj.onrender.com/api/todos/${id}`
    );

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
    return (
        /* The flex-1 here fills the parent wrapper, min-h-0 allows the overflow-y-auto to trigger */
        <div className="flex-1 flex flex-col min-h-0">
            <style>{`
                .industrial-scroll::-webkit-scrollbar { width: 4px; }
                .industrial-scroll::-webkit-scrollbar-track { background: transparent; }
                .industrial-scroll::-webkit-scrollbar-thumb { 
                    background: #dc2626; 
                    border-radius: 20px;
                }
            `}</style>

            {/* Input - This must not shrink */}
            <div className="px-10 mb-8 flex-shrink-0">
                <div className="group relative flex items-center bg-[#050506] border border-white/[0.05] rounded-xl focus-within:border-red-600/30 transition-all p-1">
                    <input 
                        type="text"
                        onChange={(e) => setinputvalue(e.target.value)}
                        placeholder="Assign new command..."
                        className="flex-1 bg-transparent py-4 px-6 text-sm text-zinc-200 outline-none placeholder:text-zinc-800"
                    />
                    <button onClick={post} className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold text-[10px] tracking-[0.2em]">
                      Patch
                    </button>
                </div>
            </div>

            {/* List - This is the ONLY part that scrolls */}
            <div className="flex-1 px-10 pb-10 overflow-y-auto industrial-scroll">
  <div className="space-y-3">
   {todos.map((todo)=>(
      <div
        className="group relative flex items-center justify-between p-6 bg-white/[0.01] border border-white/[0.03] hover:border-red-900/30 hover:bg-white/[0.03] rounded-xl transition-all"
      >
        {/* Left Side: Category and Text */}
        <div className="flex items-center gap-8" id={todo.id}>
          <div className="text-[10px] font-mono text-zinc-700 tracking-tighter">
           hello
          </div>
          <span className="text-sm tracking-wide text-zinc-300 group-hover:text-white transition-colors">
           {todo.text}
          </span>
        </div>
        

        {/* Right Side: Action Buttons (Edit & Delete) */}
        {/* Note: I removed opacity-0 so you can see them immediately, 
            but kept the group-hover effect for a premium feel */}
        <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-all">
          
          {/* EDIT BUTTON */}
          <button
            className="p-2.5 bg-zinc-900/50 hover:bg-white/10 border border-white/5 rounded-lg text-zinc-500 hover:text-white transition-all flex items-center justify-center"
            title="Edit Task"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>

          {/* DELETE BUTTON */}
          <button 
            className="p-2.5 bg-zinc-900/50 hover:bg-red-950/40 border border-white/5 rounded-lg text-zinc-500 hover:text-red-500 transition-all flex items-center justify-center"
            title="Delete Task"
            onClick={()=>deletetodo(todo._id)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
          
        </div>
      </div>
))}
  </div>
  
</div>
        </div>
    );
}

export default TodoListLayout;