import { useState, useEffect } from 'react'
//import { useParams } from "react-router-dom";
import "./MainPage.css";

function MainPage() { //For example api call

    //Put other infos
    useEffect( () => {
        document.title = `EmoRec - Home`
    } );

    return (
    <main>
        <div>
            <h1>Welcome</h1>
            <p>Welcome to home page of EmoRec - Emotion movie recommendation system.</p>
        </div>
    </main>
    )
}

export default MainPage
