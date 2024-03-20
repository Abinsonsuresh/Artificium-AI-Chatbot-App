import React from 'react'
import { useGeminiContext } from '../context/GeminiContext'

const Promptbox = () => {
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data } = useGeminiContext()

  return (
    <>

    </>
  )
}

export default Promptbox