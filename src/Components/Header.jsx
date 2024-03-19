import React from 'react'
import { FiSettings } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { BsTriangle } from 'react-icons/bs';
import { PiChatCircleLight } from "react-icons/pi";
import { CiFolderOn } from "react-icons/ci";
const Header = ({setSection, setShare, share}) => {
    return (
        <>
            <div className='hidden md:flex flex-col  gap-[1px]  rounded-xl'>
                <div className='bg-[#0D0F10] flex justify-between items-center p-[24px] rounded-t-xl'>
                    <div>
                        <p className='font-bold'>Orbital Oddysey</p>
                        <p className='text-sm text-gray-500'>Marketing Campaign for a new TV series Launch</p>

                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={()=>setShare(!share)}>
                            <IoShareSocialOutline color='gray' />
                            <button className='text-gray-500'>Share</button>
                        </div>
                        <div className='bg-gray-800 p-2 rounded-lg'>
                            <CiEdit />
                        </div>
                    </div>
                </div>


                <div className='bg-[#0D0F10] flex justify-start items-center p-[24px] rounded-b-xl gap-5'>
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

            </div>
        </>
    )
}

export default Header