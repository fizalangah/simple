
"use client"
import { useState } from "react"
const Calculato1 =() => {
 const [input,setinput] = useState<string>('')


const handleClick = (value: string) => {
  setinput((oldValue) => oldValue + value);
};

const handlerClear = () =>{
    setinput('')
}
const handlerBackspace = () =>{
    setinput(input.slice(0,-1))
}

const handlerCalculate = () =>{
    try {
       setinput(eval(input).toString()) 
    } catch (error) {
       setinput("Error") 
    }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
   <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
 <div className="mb-4 ">
    <input
     type="text"
     value={input}
      className=" w-full text-right p-2 text-lg border b-2 border-gray-400 focus:outline-none " />

 </div>
 <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/','4','5','6','*','1','2','3','-','0','.','=','+'].map((char) => (
            <button
              key={char}

              onClick={()=>{
               if(char === "=")  handlerCalculate()
                else  handleClick(char) 
               } }
              // handleClick(char)}
              className="p-4 bg-gray-800 text-white rounded-lg shadow-md"
            >
              {char}
            </button>
          ))}
    <button 
    onClick={handlerClear}
    className="rounded-lg p-4 bg-pink-500 col-span-2 text-white shadow-md ">
      Clear
    </button>

    <button
     onClick={handlerBackspace}
     className="rounded-lg p-4 bg-purple-500 col-span-2 text-white shadow-md ">
      Backspace
    </button>

 </div>

   </div>

    </div>
  )
}

export default Calculato1