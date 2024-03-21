import { createContext, useContext, useEffect, useState } from "react";
import runChat from "../config/gemini";


export const GeminiContext = createContext()

export const GeminiContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(true)

    const [data, setData] = useState("")

    // console.log(input)

    const delayPara = (index,nextword) =>{
        setTimeout(()=>{
            setData(prev=> prev + nextword)
        }, 75*index)
    }


    const onSent = async (prompt) => {
        setData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const res = await runChat(input)
        let ResArray = res.split("**");
        let newRes;
        for(let i =0 ; i < ResArray.length; i++)
        {
            if(i === 0 || i%2 !==1)
            {
                newRes += ResArray[i]
            }
            else{
                newRes += "<b>"+ResArray[i]+"</b>"
            }
        }
        let UpdatedNewRes = newRes.split("*").join("</br>")   
        let TypRes = UpdatedNewRes.split(" ")
        for(let i =0 ; i < TypRes.length; i++)
        {
            const nextword = TypRes[i]
            delayPara(i,nextword+" ")
        }
        // setData(res)
        setLoading(false)
        setActive(false)
        setInput("")

    }
// useEffect(()=>{
//     onSent("What is react")
// },[])
    const contextValue = { onSent, input, setInput, recentPrompt, setRecentPrompt, prevPrompts, setPrevPrompts, showResult, loading, data, active, setActive }

    return (
        <GeminiContext.Provider value={contextValue}>
            {props.children}
        </GeminiContext.Provider>
    )
}


export const useGeminiContext = () => {
    return useContext(GeminiContext)
}