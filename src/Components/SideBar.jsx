import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className='bg-[#131619] w-[300px]  h-full min-h-[670px] rounded-xl p-4 hidden md:flex flex-col'>
                <div className='Profile flex flex-row justify-between items-center bg-[#131619] '>
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

                    </div>
                </div>

                <hr className='bg-gray-600 opacity-10 mt-2' />
            </div>

        </>
    )
}

export default SideBar