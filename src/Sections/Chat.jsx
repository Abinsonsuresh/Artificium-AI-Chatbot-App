import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
import { useGeminiContext } from '../context/GeminiContext';
import { IoCopyOutline } from "react-icons/io5"
import LoadingGIF from  '../assets/Loading.gif'
const Chat = () => {
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()
  return (
    <>
      <div className="flex w-full relative  justify-center items-center h-full md:min-h-[400px] min-h-[90vh]  mt-2 p-2 ">
        <div className='overflow-y-scroll  scroll  scroll-smooth h-full  w-full'>

       
        <div className='text-center w-full flex flex-col items-center h-full'>

          {/* CONTENT */}
          <div className='flex w-full  flex-col items-center mt-2 gap-5'>

            <div className="user bg-[#0D0F10] flex  justify-start items-start w-full gap-3 p-4 border border-gray-600  border-opacity-50 rounded-xl shadow-2xl">
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-2xl bg-red-950'></div>
              </div>
              <div className='flex flex-col items-start w-full gap-3'>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-[16px]'>Ryan Lee</p>
                  <IoCopyOutline />
                </div>
                <p className='text-[16px] text-gray-400 '>{recentPrompt}</p>

              </div>
            </div>



            {
              !loading ? (<>
                {
                  data && <div className="user bg-[#0D0F10] flex  justify-start items-start w-full gap-3 p-4 border border-gray-600  border-opacity-50 rounded-xl shadow-2xl">
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-2xl bg-green-300'></div>
                    </div>
                    <div className='flex flex-col items-start w-full gap-3'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='text-[16px]'>Artificium</p>
                        <IoCopyOutline />
                      </div>
                      <p className='text-[16px] text-gray-400 text-start' dangerouslySetInnerHTML={{ __html: data }}></p>

                    </div>
                  </div>
                }

              </>) : (<div>
            <img className='w-12 grayscale' src={LoadingGIF} alt="loading" />
              </div>)
            }



          </div>
        </div>
        </div>
      <div className='bg-[#0D0F10]  w-full absolute bottom-0 mt-2 h-[100px] p-4 rounded-2xl'>
        <PiArrowFatLinesRight onClick={() => onSent()} className='absolute top-[30%] right-10 cursor-pointer' size={30} />
        <input onChange={(e) => setInput(e.target.value)} value={input} className='w-full  h-full bg-transparent border-none outline-none' placeholder='Enter the prompt here' type="text" />
      </div>
      </div>
    </>
  )
}

export default Chat