import React from 'react'
import { FiSettings } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { BsTriangle } from 'react-icons/bs';
import { PiChatCircleLight } from "react-icons/pi";
import { CiFolderOn } from "react-icons/ci";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaFolderClosed } from 'react-icons/fa6';

const Header = ({ setSection, setShare, share }) => {
    return (
        <>
            <div className='hidden md:flex flex-col  gap-[1px]  rounded-xl'>
                <div className='bg-[#0D0F10] flex justify-between items-center p-[24px] rounded-t-xl'>
                    <div>
                        <p className='font-bold'>Orbital Oddysey</p>
                        <p className='text-sm text-gray-500'>Marketing Campaign for a new TV series Launch</p>

                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div>
                            <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => setShare(!share)}>
                            <IoShareSocialOutline color='gray' />
                            <button className='text-gray-500'>Share</button>
                        </div>
                        <div className='bg-gray-800 p-2 rounded-lg'>
                            <CiEdit />
                        </div>
                    </div>
                </div>


                <div className='bg-[#0D0F10] flex justify-start items-center p-[24px] rounded-b-xl gap-5'>
                    <div className='flex items-center gap-3 cursor-pointer' onClick={() => setSection("artificium")}>
                        <div >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8518 5.08959L16.3171 14.023C16.886 15.161 16.0587 16.5 14.7867 16.5H11.8518M11.8518 5.08959L10.5304 2.44613C9.89985 1.18462 8.10015 1.18462 7.46958 2.44613L1.68285 14.023C1.11401 15.161 1.94129 16.5 3.21326 16.5H6.14824M11.8518 5.08959L9 7.9422M6.14824 16.5H11.8518M6.14824 16.5L3.29648 13.6474M11.8518 16.5L6.14824 10.7948M9 7.9422L16.272 15.2163M9 7.9422L6.14824 10.7948M1.72801 15.2163L3.29648 13.6474M3.29648 13.6474L6.14824 10.7948" stroke="#B6F09C" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <span className=''>Artificium</span>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer' onClick={() => setSection("chat")}>
                        <div >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9V16.5H9Z" stroke="white" strokeWidth="1.5" strokeLinecapp="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <span>Chat</span>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer' onClick={() => setSection("library")}>
                        <FaFolderClosed size={20} />
                        <span>Library</span>
                    </div>

                </div>

            </div>

            {/* <div className=' bg-[#0D0F10] flex justify-between items-center px-4 rounded-xl md:hidden'>
            <div className='bg-[#0D0F10] flex justify-center items-center p-[24px] rounded-b-xl gap-5'>
                    <div className='flex items-center gap-3 cursor-pointer' onClick={()=>setSection("artificium")}>
                    <BsTriangle color='green' />
                        <span>Artificium</span>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer' onClick={()=>setSection("chat")}>
                    <PiChatCircleLight />
                        <span>Chat</span>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer' onClick={()=>setSection("library")}>
                    <CiFolderOn />
                        <span>Library</span>
                    </div>

                </div>

                <div>
                <CiFolderOn />

                </div>
            </div> */}



        </>
    )
}

export default Header