import React from 'react'
import { PiChatCircleLight } from "react-icons/pi";

const Library = () => {
    return (
        <>
            <div className="flex w-full flex-wrap  justify-center items-center  gap-5  mt-2 p-2 overflow-hidden">

                <div className='ImagesSection border border-opacity-10 border-gray-600 w-full max-w-[300px] h-full rounded-2xl p-4 flex flex-col justify-between gap-5 overflow-y-scroll  scroll  scroll-smooth hide-scrollbar'>

                    <div className="h my-6">
                        <p className='text-xl font-bold'>Images</p>
                    </div>

                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 text-start font-semibold'>
                                <p>Captain Drake</p>
                                <p>Natural born leader with years of experience in space exploration.</p>
                            </div>
                            <div className='my-4 w-full p-2 '>
                                <img className=' object-cover object-center rounded-xl' src="https://img.freepik.com/free-photo/night-sky-glows-with-galaxy-mystical-silhouette-generative-ai_188544-11287.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" alt="" />
                            </div>

                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>12</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 text-start font-semibold'>
                                <p>Cosmic Voyager</p>
                                <p>Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.</p>
                            </div>
                            <div className='my-4 w-full p-2 '>
                                <img className=' object-cover object-center rounded-xl' src="https://img.freepik.com/free-photo/night-sky-glows-with-galaxy-mystical-silhouette-generative-ai_188544-11287.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" alt="" />
                            </div>

                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>19</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                </div>


                <div className='ImagesSection border border-opacity-10 border-gray-600 w-full max-w-[300px] h-full rounded-2xl p-4 flex flex-col justify-between gap-5 overflow-y-scroll  scroll  scroll-smooth hide-scrollbar'>

                    <div className="h my-6">
                        <p className='text-xl font-bold'>Documents</p>
                    </div>

                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full w-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 text-start font-semibold'>
                                <p>Character bios</p>
                                <p> 3 documents, 43832 words</p>
                            </div>
                        

                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>12</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full w-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 w-full text-start font-semibold'>
                                <p>Plot outline</p>
                                <p>1 document, 18745 words</p>
                            </div>
                        
                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>28</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                </div>


                <div className='ImagesSection border border-opacity-10 border-gray-600 w-full max-w-[300px] h-full rounded-2xl p-4 flex flex-col justify-between gap-5 overflow-y-scroll  scroll  scroll-smooth hide-scrollbar'>

                    <div className="h my-6">
                        <p className='text-xl font-bold'>Ideas</p>
                    </div>

                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 text-start font-semibold'>
                                <p>Concept art for potential new characters or locations.</p>
                                {/* <p>Natural born leader with years of experience in space exploration.</p> */}
                            </div>
                         

                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://r2.starryai.com/results/1006004089/a341454b-39bf-4775-ae97-8207c4cb769f.webp" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_1280.jpg" alt="" />
                                <img className="w-10 h-10 border-2 border-white rounded-xl dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MuSlBrJXQ_jO5RU2_nGCHdk00eB7pFw09w&usqp=CAU" alt="" />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-xl hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>1</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                    <div className='card flex flex-col items-center'>

                        <div className='bg-[#0D0F10] h-full flex flex-col items-center rounded-2xl justify-start'>
                            <div className='p-4 text-start font-semibold'>
                                <p>A list of potential plot points or story arcs.</p>
                                {/* <p>Natural born leader with years of experience in space exploration.</p> */}
                            </div>
                          

                        </div>

                        <div className=' bg-[#0D0F10] p-8 my-2 w-full rounded-xl flex items-center justify-between'>
                            <div>
                                <div className="flex -space-x-4 rtl:space-x-reverse">
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" />
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" />
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" />
                                    <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <p>12</p>
                                <PiChatCircleLight color='green' />

                            </div>
                        </div>
                    </div>


                </div>




            </div>

        </>
    )
}

export default Library