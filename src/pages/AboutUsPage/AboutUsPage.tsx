import { useState, useEffect } from 'react'
//import { useParams } from "react-router-dom";
import "./AboutUsPage.css";

function AboutUsPage() { //Put project details to this page

    //Put other infos
    useEffect( () => {
        document.title = `EmoRec - About Us`
    } );

    return (
    <main>
        <div>
            <h1>Welcome</h1>
            <p>Welcome to about us page of EmoRec - Emotion movie recommendation system.</p>
        </div>
    </main>
    )
}

export default AboutUsPage
