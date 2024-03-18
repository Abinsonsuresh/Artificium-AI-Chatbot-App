import React from 'react'
import { PiChatCircleLight } from 'react-icons/pi'

const Artificium = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[600px] border mt-2 overflow-y-scroll  overflow-x-hidden scroll  scroll-smooth">
                <div className='text-center flex flex-col items-center'>
                    <div>
                        <h3 className='font-bold text-xl'>Innovation Starter Pack</h3>
                        <p className='text-sm text-gray-500'>Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
                    </div>

                    <div className="flex flex-row items-center gap-5 mt-6">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col'>
                                <div className='bg-slate-900 p-4 rounded-full'>
                                    <PiChatCircleLight />
                                </div>
                                <span>Creative Assets</span>
                            </div>

                            <div className='bg-gray-700 p-4 w-48 mt-6 rounded-2xl flex justify-between items-center'>
                                <div>
                                    <p>UI wireframe</p>
                                </div>
                                <PiChatCircleLight />
                            </div>
                        </div>


                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col'>
                                <div className='bg-slate-900 p-4 rounded-full'>
                                    <PiChatCircleLight />
                                </div>
                                <span>Creative Assets</span>
                            </div>

                            <div className='bg-gray-700 p-4 w-48 mt-6 rounded-2xl flex justify-between items-center'>
                                <div>
                                    <p>UI wireframe</p>
                                </div>
                                <PiChatCircleLight />
                            </div>
                        </div>


                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col'>
                                <div className='bg-slate-900 p-4 rounded-full'>
                                    <PiChatCircleLight />
                                </div>
                                <span>Creative Assets</span>
                            </div>

                            <div className='bg-gray-700 p-4 w-48 mt-6 rounded-2xl flex justify-between items-center'>
                                <div>
                                    <p>UI wireframe</p>
                                </div>
                                <PiChatCircleLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artificium