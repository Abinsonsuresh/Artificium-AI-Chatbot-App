import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
import { useGeminiContext } from '../context/GeminiContext';
const Chat = () => {
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()
  return (
    <>
      <div className=''>

        <div className="flex w-full  justify-center items-center h-full  mt-2 p-2 overflow-y-scroll scroll  scroll-smooth">
          <div className='text-center w-full flex flex-col items-center h-full'>

            {/* CONTENT */}
            <div className='flex w-full flex-col items-center mt-8'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque, molestiae amet sequi totam in quaerat molestias repellat consectetur dolorem eius rerum, enim dolore accusamus. Accusamus autem doloremque nulla.</p>

            </div>
          </div>
        </div>
        <div className='bg-[#0D0F10] w-full  md:w-[70%] fixed  bottom-5  h-[100px] p-4 rounded-2xl'>
          <PiArrowFatLinesRight onClick={() => onSent()} className='absolute top-[30%] right-10 cursor-pointer' size={30} />
          <input onChange={(e) => setInput(e.target.value)} value={input} className='w-full  h-full bg-transparent border-none outline-none' placeholder='Enter the prompt here' type="text" />
        </div>

      </div>
    </>
  )
}

export default Chat