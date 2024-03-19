import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
import { useGeminiContext } from '../context/GeminiContext';
const Chat = () => {
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()
  return (
    <>
      <div className="flex w-full  justify-center items-center h-full   mt-2 p-2 overflow-y-scroll  scroll  scroll-smooth">
        <div className='text-center w-full flex flex-col items-center h-full'>

          {/* CONTENT */}
          <div className='flex w-full  flex-col items-center mt-8 gap-5'>

            <div className="user flex justify-start items-center w-full p-4 border">
              <p className='text-xl font-semibold '>{recentPrompt}</p>
            </div>

            <div className="bot flex justify-end items-center w-full p-4 border ">
              <p>{data}</p>
            </div>

          </div>
        </div>
      </div>
      <div className='bg-[#0D0F10]  w-full relative  h-[100px] p-4 rounded-2xl'>
        <PiArrowFatLinesRight onClick={() => onSent()} className='absolute top-[30%] right-10 cursor-pointer' size={30} />
        <input onChange={(e) => setInput(e.target.value)} value={input} className='w-full  h-full bg-transparent border-none outline-none' placeholder='Enter the prompt here' type="text" />
      </div>
    </>
  )
}

export default Chat