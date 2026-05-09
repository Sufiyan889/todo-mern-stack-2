import TodoListLayout from '../Components/TodoListLayout';

const NovaIndustrialTodo = () => {
  return (
    <div className="min-h-screen w-full bg-[#030303] flex items-center justify-center p-4 font-sans antialiased selection:bg-red-600/30">
      <div className="w-[90%] max-w-[1600px] h-[80vh] bg-[#0a0a0b] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden relative">
        
        {/* Laser Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

        {/* Header - Fixed Height */}
        <header className="px-10 py-8 flex justify-between items-center flex-shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-white uppercase">
              Nova <span className="text-red-600">Terminal</span>
            </h1>
            <p className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mt-1">Management Protocol // 01</p>
          </div>
          <div className="flex gap-4 text-[10px] font-mono text-zinc-500">
            <span className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
               NODE_ONLINE
            </span>
          </div>
        </header>

        {/* --- CRITICAL WRAPPER --- */}
        <div className="flex-1 flex flex-col min-h-0">
          <TodoListLayout />
        </div>
        {/* ----------------------- */}

        {/* Footer - Fixed Height */}
        <footer className="px-10 py-6 bg-black/40 border-t border-white/[0.05] flex justify-between items-center flex-shrink-0">
          <div className="flex gap-6 items-center">
            <span className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">Status: Optimal</span>
            <div className="h-1 w-20 bg-zinc-900 rounded-full overflow-hidden">
               <div className="h-full bg-red-600 w-1/3 shadow-[0_0_5px_#dc2626]"></div>
            </div>
          </div>
          <span className="text-[9px] font-mono text-zinc-800 tracking-tighter italic uppercase">
            X-Series Terminal // Karachi Unit
          </span>
        </footer>
      </div>
    </div>
  );
};

export default NovaIndustrialTodo;