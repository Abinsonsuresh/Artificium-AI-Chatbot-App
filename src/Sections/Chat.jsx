import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
import { useGeminiContext } from '../context/GeminiContext';
import { IoCopyOutline } from "react-icons/io5"
import LoadingGIF from '../assets/Loading.gif'
import Promptbox from '../Components/Promptbox';
const Chat = () => {

  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()
  // onSent("what is react")
  return (
    <>
      <div className="flex-1 my-4 overflow-hidden">


        <div className="flex  w-full relative  justify-center items-center h-full   mt-2 p-2 ">
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
                      <div className="user bg-[#0D0F10] flex  justify-start items-start w-full gap-3 p-4 border border-gray-600  border-opacity-50 rounded-xl shadow-2xl">
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
        </div>

      </div>

      <div className="p-2  ">
        <div  className="p-4 bg-[#0D0F10] rounded-xl shadow-lg  flex relative ">
          <input onChange={(e) => setInput(e.target.value)} value={input} className="input flex-1 text-white focus:outline-none bg-transparent rounded-r-none" type="text" />
          <PiArrowFatLinesRight onClick={() => onSent()} className='absolute top-[30%] right-10 cursor-pointer' size={20} />
        </div>
      </div>
    </>
  )
}

export default Chat