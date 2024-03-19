import { createContext, useContext, useState } from "react";
import runChat from "../config/gemini";


export const GeminiContext = createContext()

export const GeminiContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState("")

    console.log(input)


    const onSent = async (prompt) => {
        await runChat(input)
    }

    // onSent("What is react")
    const contextValue = { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data }

    return (
        <GeminiContext.Provider value={contextValue}>
            {props.children}
        </GeminiContext.Provider>
    )
}


export const useGeminiContext = () => {
    return useContext(GeminiContext)
}