import React, { useState } from 'react'
import { FaAngleDown, FaRegSquare } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsTriangle } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { PiChatCircleLight } from "react-icons/pi";
import { CiFolderOn } from "react-icons/ci";
import { FaFolderClosed } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const SideBar = ({ setSection, setShare, share }) => {
    const [nav, setNav] = useState(false)
    const setNavToggle = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className="flex">


                <div className={!nav ? `w-[312px] bg-[#0f1112] p-2 rounded-b-xl  h-full min-h-screen md:min-h-full gap-1 hidden md:flex flex-col justify-between  overflow-y-scroll  overflow-x-hidden scroll  scroll-smooth hide-scrollbar` : `w-[312px] bg-[#0f1112] p-2 rounded-b-xl  h-full min-h-screen md:min-h-full gap-1 flex flex-col justify-between  overflow-y-scroll  overflow-x-hidden scroll  scroll-smooth hide-scrollbar`}>
                    <div className='flex flex-col gap-1'>
                        {/* GROUP SECTION */}
                        <div className='GROUP flex flex-row justify-between items-center p-[24px] rounded-t-xl bg-[#0D0F10] '>
                            <div className='flex flex-row justify-center items-center gap-5'>
                                <div>
                                    <div className='w-10 h-10 rounded-full bg-red-950'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[16px]'>Intellisys</p>
                                    <p className='text-[12px]'>12 members</p>
                                </div>
                            </div>
                            <div>
                                <FaAngleDown className='' color='gray' />
                            </div>
                        </div>
                        {/* <hr className='bg-gray-600 opacity-10 mt-2' /> */}

                        {/* GENERAL SECTION */}

                        <div className='flex flex-col bg-[#0D0F10]  p-[24px]'>
                            <div className='py-[8px]'>
                                <p className='text-[12px] text-gray-500'>GENERAL</p>
                            </div>
                            <div className='SEARCH flex justify-start items-center gap-5 p-4'>
                                <span><MdOutlineSearch color='gray' /></span>
                                <p className='text-[14px] '>Search</p>
                            </div>

                            <div className='SEARCH flex justify-start items-center gap-5 p-4'>
                                <span><RiBillLine color='gray' /></span>
                                <p className='text-[14px]'>Billing</p>
                            </div>
                        </div>


                        {/* PROJECTS SECTION */}

                        <div className='flex flex-col bg-[#0D0F10] p-4'>
                            <div className='py-[8px]'>
                                <p className='text-[12px] text-gray-500'>PROJECTS</p>
                            </div>

                            <div className='flex gap-1 flex-col'>
                                <div className=' bg-gray-600 rounded-xl'>
                                    <div className='flex justify-start items-center p-2 gap-5'>
                                        <span>
                                            <FaRegSquare color='#B6F09C' />

                                        </span>
                                        <p className='text-[14px] '>Orbital Oddysey</p>
                                    </div>
                                </div>

                                <div className='  rounded-xl'>
                                    <div className='flex justify-start items-center p-2 gap-5'>
                                        <span>
                                            <BsTriangle color='#D0302F' />

                                        </span>
                                        <p className='text-[14px] '>Digital Product Launch</p>
                                    </div>
                                </div>



                                <div className='  rounded-xl'>
                                    <div className='flex justify-start items-center p-2 gap-5'>
                                        <span>
                                            <FaRegSquare color='#E26F20' />

                                        </span>
                                        <p className='text-[14px] '>Brand Refresh</p>
                                    </div>
                                </div>

                                <div className='  rounded-xl'>
                                    <div className='flex justify-start items-center p-2 gap-5'>
                                        <span>
                                            <FaRegCircle color='#82DBF7' />

                                        </span>
                                        <p className='text-[14px] '>Social Media Strategy</p>
                                    </div>
                                </div>

                                <div className='  rounded-xl'>
                                    <div className='flex justify-start items-center p-2 gap-5'>
                                        <span>
                                            <FaRegSquare color='gray' />

                                        </span>
                                        <p className='text-[14px] text-gray-600'>Add new project</p>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>


                    {/* PROFILE */}
                    <div className=''>
                        <div className='GROUP  flex flex-row justify-between items-center p-[24px] rounded-xl bg-gradient-to-r from-gray-900 via-black to-[#0D0F10] '>
                            <div className='flex flex-row justify-center items-center gap-5'>
                                <div>
                                    <div className='w-10 h-10 rounded-2xl bg-red-950'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[16px]'>Ryan Lee</p>
                                    <p className='text-[12px]'></p>
                                </div>
                            </div>
                            <div>
                                <FiSettings className='' color='gray' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={!nav ?  `w-12 hidden h-12 bg-[#0f1112] rounded-r-lg flex items-center justify-center md:hidden` : `w-12 h-12 bg-[#0f1112] rounded-r-lg flex items-center justify-center md:hidden`}>
                    <IoCloseOutline size={25} className='cursor-pointer'  onClick={() => setNavToggle()}/>
                </div>
            </div>


            <div className='md:hidden flex items-center flex-col bg-[#0D0F10] gap-5 w-12 h-full'>
                <div className='flex items-center flex-col gap-5 mt-6'>
                    <BsFillMenuButtonWideFill size={20} className='cursor-pointer' onClick={() => setNavToggle()} />

                    <div onClick={() => setSection("artificium")} className='cursor-pointer'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8518 5.08959L16.3171 14.023C16.886 15.161 16.0587 16.5 14.7867 16.5H11.8518M11.8518 5.08959L10.5304 2.44613C9.89985 1.18462 8.10015 1.18462 7.46958 2.44613L1.68285 14.023C1.11401 15.161 1.94129 16.5 3.21326 16.5H6.14824M11.8518 5.08959L9 7.9422M6.14824 16.5H11.8518M6.14824 16.5L3.29648 13.6474M11.8518 16.5L6.14824 10.7948M9 7.9422L16.272 15.2163M9 7.9422L6.14824 10.7948M1.72801 15.2163L3.29648 13.6474M3.29648 13.6474L6.14824 10.7948" stroke="#B6F09C" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <div onClick={() => setSection("chat")} className='cursor-pointer'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9V16.5H9Z" stroke="white" strokeWidth="1.5" strokeLinecapp="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <FaFolderClosed size={20} onClick={() => setSection("library") } />

                </div>
            </div>


        </>
    )
}

export default SideBar