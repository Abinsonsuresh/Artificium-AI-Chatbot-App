import React, { useState } from 'react'
import Artificium from './Artificium';
import Chat from './Chat';
import Library from './Library';
import Header from '../Components/Header';
import ChatBox from './ChatBox';

const Page = () => {
    const [share, setShare] = useState(false)
    const [section, setSection] = useState("artificium")

    let sectionComponent;

    switch (section) {
        case "artificium":
            sectionComponent = <Artificium />;
            break;
        case "chat":
            sectionComponent = <ChatBox />;
            break;

        case "library":
            sectionComponent = <Library />;
            break;
        default:
            sectionComponent = null;
    }

    return (
        <>
            
                <Header setSection={setSection} setShare={setShare} share={share} />
                {sectionComponent}
        
        </>
    )
}

export default Page