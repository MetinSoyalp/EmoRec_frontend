import { useState, useEffect } from 'react'
//import { useParams } from "react-router-dom";
import "./AboutUsPage.css";

function AboutUsPage() { //Put project details to this page

    //Put other infos
    useEffect( () => {
        document.title = `EmoRec - About Us`
    } );

return (
        <main className="aboutus-page">
            <section className="hero-section">
                <div className="hero-text">
                    <h1>About Us</h1>
                    <p>
                        Metin Soyalp - Potato, Founder <br/>
                        Giray Yıldırım - Banana Viking, Co-Founder
                    </p>
                </div>
            </section>
        </main>
    );
}

export default AboutUsPage
