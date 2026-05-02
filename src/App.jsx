import { useState } from "react";
import { X } from "lucide-react";
const App = () => {

  const [title , setTitle] = useState("");
  const [note , setNote] = useState("");

  const [task , setTask] = useState([]);

  return (
    <>
    <div className='h-screen lg:flex justify-between bg-black text-white'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        
        let copytask = [...task];
        copytask.push({title,note});
        
        setTask(copytask);
        
        setTitle("");

        setNote("");
      }}
      className='flex flex-wrap flex-col p-11 lg:w-1/2'>

        <h1 className="text-3xl font-bold mb-5 text-white">Add Notes</h1>

        <div className='flex flex-wrap flex-col items-start w-full gap-4'>
          {/* Input For Heading */}
          <input
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
            type='text' 
            placeholder='Enter Notes Heading'
            className="px-5 py-2 w-full rounded font-medium
                    bg-white/10 backdrop-blur-lg
                            border border-white/20"/>
          {/* Input For Notes */}
          <textarea 
            value={note}
            onChange={(e)=>{
              setNote(e.target.value);
            }}
            type='text'
            placeholder='Write Notes'
            className="h-40 px-5 py-2 w-full lg:h-135
                       rounded font-medium bg-transparent backdrop-blur-lg 
                            border border-white/20"/>

          <button
            className="bg-white/10 backdrop-blur-lg
                        border border-white/20 text-white
                        active:bg-white/20 active:scale-95 transition-transform ease-in
                        px-5 py-2 w-full outline-none rounded font-medium"
          >Add Notes</button>

        </div>

      </form>

      <div className="p-10 lg:border-white/10 lg:border-l lg:w-1/2 min-h-10 flex flex-col">
        <h1 className="text-3xl font-bold mb-5 text-white">Recent Notes</h1>
        <div className="flex-1 overflow-auto pr-2">
          {task.length === 0 ? (
            <div className="h-52 rounded-2xl mb-7 
             bg-white/10 backdrop-blur-lg
             border border-white/20 p-8 animate-pulse">
              <div className="h-6 w-3/4 bg-white/20 rounded mb-4"></div>
              <div className="h-0.5 w-full bg-white/20 my-3"></div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-white/20 rounded"></div>
                <div className="h-3 w-5/6 bg-white/20 rounded"></div>
                <div className="h-3 w-2/3 bg-white/20 rounded"></div>
                </div>
            </div>
          ) : (
            task.map((e, idx) => {
              return (
                <div key={idx} className="relative h-52 rounded-2xl mb-7 transition-all  
                  bg-white/10 backdrop-blur-lg
                    border border-white/20 p-8">
                  <button 
                  onClick={()=>{
                    const copyTask = [...task];
                    copyTask.splice(idx,1);
                    setTask(copyTask);
                  }}
                  className="absolute top-3 right-3 text-white/60 rounded-full
                  cursor-pointer active:scale-105 active:bg-transparent active:text-sm active:text-red-700
                  hover:bg-red-700">
                    <X size={18} />
                  </button>
                  <h3 className="text-3xl font-bold">{e.title}</h3> 
                  <hr className="text-white/50 my-3"/>
                  <p className="text-[15px] font-semibold text-white/50 line-clamp-4">
                    {e.note}
                  </p>     
                </div>
                );
              })
            )}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
