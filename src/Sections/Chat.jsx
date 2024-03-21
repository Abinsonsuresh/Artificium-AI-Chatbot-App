import React from 'react'
import { PiArrowFatLinesRight } from "react-icons/pi";
import { useGeminiContext } from '../context/GeminiContext';
import { IoCopyOutline } from "react-icons/io5"
import LoadingGIF from '../assets/Loading.gif'
import { FaPaperPlane } from "react-icons/fa6";
const Chat = () => {

  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()
  // onSent("what is react")
  return (
    <>
      <div className="flex-1 overflow-hidden">


        <div className="flex  w-full relative  justify-center items-center h-full   mt-2 p-2 ">
          <div className='overflow-y-scroll  scroll  scroll-smooth h-full  w-full'>


            <div className='text-center w-full flex flex-col items-center h-full'>

              {/* CONTENT */}
              <div className='flex w-full  flex-col items-center mt-2 gap-5'>

                {
                  data && (<div className="user bg-[#0D0F10] flex  justify-start items-start w-full gap-3 p-4 border  border-gray-600  border-opacity-50 rounded-xl shadow-2xl">
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
                  </div>)
                }



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
        </div>

      </div>

      <div className="p-2 mb-[10vh] md:mb-0">
        <div className="p-4 py-2  bg-[#0D0F10] rounded-xl shadow-lg  flex items-center  relative ">
          <div className='bg-[#1A1D21] p-4  rounded-xl cursor-pointer'>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8V9C1 12.3137 3.68629 15 7 15M13 8V9C13 12.3137 10.3137 15 7 15M7 15V19M7 19H11M7 19H3M7 12C5.34315 12 4 10.6569 4 9V4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4V9C10 10.6569 8.65685 12 7 12Z" stroke="#686B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
          </div>
          <input onChange={(e) => setInput(e.target.value)} placeholder='Enter your prompt here' value={input} className="input placeholder:text-sm p-4 flex-1 w-full  text-white focus:outline-none bg-transparent rounded-r-none" type="text" />

          <div className="flex items-center gap-4 flex-row">

            <div className=' cursor-pointer'>
            <svg width="20" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.22183 11.7279L10.7019 6.24784C11.3853 5.56443 12.4934 5.56443 13.1768 6.24784V6.24784C13.8602 6.93126 13.8602 8.0393 13.1768 8.72272L7.6967 14.2028C6.32986 15.5696 4.11379 15.5696 2.74695 14.2028V14.2028V14.2028C1.38012 12.836 1.38012 10.6199 2.74695 9.25305L9.28769 2.71231C11.3379 0.662058 14.6621 0.662058 16.7123 2.71231V2.71231C18.7626 4.76256 18.7626 8.08668 16.7123 10.1369L10.1716 16.6777" stroke="#686B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

            </div>


            <div className='bg-[#1A1D21] p-4  rounded-xl cursor-pointer'>
              <FaPaperPlane onClick={() => onSent()} className='' size={20} />
            </div>




          </div>

        </div>
      </div>
    </>
  )
}

export default Chat