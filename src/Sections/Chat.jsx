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


      <div className="pb-44 pt-20 containerWrap border">
        <div>
          {/* <div className="text-start">
            <div className="chat-image avatar">
              
            </div>
            <div className="chat-header">
              <p>NAme </p>
            </div>
            <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: data }}></div>
          </div> */}
        

        <div className='overflow-y-scroll  scroll  scroll-smooth h-full  w-full'>

       
<div className='text-center w-full flex flex-col items-center h-full'>


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
              {/* <p className='text-[16px] text-gray-400 text-start' dangerouslySetInnerHTML={{ __html: data }}></p> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequuntur nulla expedita soluta sed commodi explicabo voluptatem. Enim voluptatibus quas ex, alias temporibus cumque deleniti harum perspiciatis, fugiat aut eveniet molestiae, perferendis et voluptatum hic fuga eos. Natus placeat voluptate excepturi alias eaque aspernatur voluptatem iure quibusdam tempora, magni beatae reiciendis, ea, cupiditate officiis! Modi error distinctio facere accusantium repellendus iusto dolor, fugit nulla dignissimos commodi eius excepturi eum ratione, quibusdam blanditiis praesentium quisquam cum corporis consequatur assumenda! Quasi quidem commodi et repellat accusantium velit voluptas ea, deserunt consequuntur, modi corporis delectus. Fuga at veniam natus dignissimos molestias labore quae velit, odio aliquam obcaecati adipisci, voluptatibus architecto. Itaque quas vero voluptatem molestiae eum voluptate optio? Cumque officiis iusto dolorem iste cupiditate commodi, praesentium eligendi at reprehenderit ratione excepturi, quas provident. Velit aliquam error iste at eos voluptatum impedit dolor. Ad quia minima vel voluptatibus animi dolore nulla modi atque. Neque error perspiciatis rem! Obcaecati eligendi aperiam omnis saepe quod ipsa recusandae sunt ex facilis soluta, doloribus itaque perferendis at tenetur? Repellat unde corrupti, rem id qui, in nesciunt recusandae eius nihil asperiores laborum ratione sapiente, blanditiis accusamus laudantium dolorem sunt dolor maxime? At porro corrupti neque dolores praesentium, nesciunt magni atque tempore cum aut quis sequi perferendis quaerat! Voluptatum ullam natus excepturi commodi! Excepturi praesentium at labore nam veritatis magnam, quod veniam? Aliquid sit assumenda nihil, libero enim quis praesentium minus ducimus ratione repellendus non nobis laboriosam? Repellat, non alias. Molestias veniam corrupti quasi placeat repudiandae laborum esse quos animi quibusdam impedit voluptas debitis temporibus voluptates porro et possimus neque voluptatibus pariatur odit deleniti assumenda vero soluta, sint perspiciatis? Accusantium placeat autem repellendus maxime sunt recusandae est, totam dicta doloribus architecto iure, sequi magnam eos, modi nulla illo nemo numquam nihil quam mollitia laudantium sint? Voluptatem repellat id illo voluptatum, odio distinctio quasi beatae totam dolore omnis aspernatur libero magni tenetur. Omnis fugiat, voluptate aperiam repudiandae eum odit cupiditate. Dolor inventore facere ipsum numquam hic, velit laudantium corrupti pariatur, minus omnis cum quaerat, quos repellat officiis labore laborum? Rem incidunt commodi vero, dignissimos facere odit possimus earum, voluptatem impedit maxime perferendis in ipsam, obcaecati dolorum? Dolorum quo eveniet impedit magni porro iure similique hic illo. Tempora consectetur ad enim aut commodi beatae. Debitis eius tenetur eaque error eveniet nulla illum libero nisi, suscipit, ipsum dolorum sed sint cupiditate voluptas, id molestiae. Accusantium excepturi quis consequatur, modi sunt sed iusto similique.</p>

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

        <div>

        </div>
        </div>
        <div className='w-full relative flex items-center'>
      
        <div className="bg-gray-900 fixed bottom-0 w-full py-10 shadow-lg border">
      <form className="px-2 mx-auto flex justify-start ">
        <input onChange={(e)=> setInput(e.target.value)}  className="input w-full text-white focus:outline-none bg-transparent rounded-r-none" type="text" />
        <button onClick={()=> onSent()} type="submit" className="w-auto bg-gray-700 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>


        </div>
      </div>
    </>
  )
}

export default Chat