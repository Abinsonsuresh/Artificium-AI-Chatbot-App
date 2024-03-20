import React from 'react'
import { useGeminiContext } from '../context/GeminiContext'

const Promptbox = () => {
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()

  return (
    <>
      <div className="bg-gray-900 fixed bottom-0 w-fit py-10 shadow-lg border ">
        <form className="px-2 mx-auto flex justify-start ">
          <input onChange={(e) => setInput(e.target.value)} className="input w-full text-white focus:outline-none bg-transparent rounded-r-none" type="text" />
          <button onClick={() => onSent()} type="submit" className="w-auto bg-gray-700 text-white rounded-r-lg px-5 text-sm">Send</button>
        </form>
      </div>
    </>
  )
}

export default Promptbox