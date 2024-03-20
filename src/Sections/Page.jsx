import React, { useState } from 'react'
import Artificium from './Artificium';
import Chat from './Chat';
import Library from './Library';
import Header from '../Components/Header';
import ChatBox from './ChatBox';
import { useNavContext } from '../context/NavContext';

const Page = () => {
    const { sectionComponent } = useNavContext()


    return (
        <>

            <Header />
            

        </>
    )
}

export default Page