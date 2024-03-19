import { createContext } from "react";
import runChat from "../config/gemini";


export const GeminiContext = createContext()

export const GeminiContextProvider = (props) =>{

    const onSent = async (prompt) =>{
        await runChat(prompt)
    }

    onSent("What is react")
    const contextValue ={}

    return(
        <GeminiContext.Provider value={contextValue}>
            {props.children}
        </GeminiContext.Provider>
    )
}