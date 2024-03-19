import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
const Chat = () => {
  return (
    <>
      <div className="flex w-full  justify-center items-center h-full  mt-2 p-2 overflow-y-scroll  scroll  scroll-smooth">
        <div className='text-center flex flex-col items-center h-full'>

          {/* CONTENT */}
          <div className='flex flex-col items-center mt-8'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque, molestiae amet sequi totam in quaerat molestias repellat consectetur dolorem eius rerum, enim dolore accusamus. Accusamus autem doloremque nulla.</p>

          </div>
        </div>
      </div>
      <div className='bg-gray-600 w-full relative  h-[100px] p-4 rounded-2xl'>
        <PiArrowFatLinesRight className='absolute top-[30%] right-10 cursor-pointer' size={30} />
        <input className='w-full   h-full bg-transparent border-none outline-none' placeholder='Enter the prompt here' type="text" />
      </div>
    </>
  )
}

export default Chat