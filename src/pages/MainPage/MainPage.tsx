import { useState, useEffect } from 'react'
//import { useParams } from "react-router-dom";
import "./MainPage.css";

function MainPage() { //For example api call

    //Put other infos
    useEffect( () => {
        document.title = `EmoRec - Home`
    } );

    return (
        <main className="main-page">
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to EmoRec</h1>
                    <p>
                        EmoRec is a movie recommendation platform designed to understand not just what you watch,
                        but how it makes you feel. We believe that films are more than entertainment—they’re emotional
                        experiences. That’s why EmoRec is built to help you find movies that speak to your tastes, your
                        moods, and your moments. Whether you're in search of something comforting, thrilling, or deeply
                        moving, EmoRec is here to guide your journey through cinema.
                    </p>
                </div>
                <div className="hero-image">
                    <img src="/potato.png" alt="Cinematic emotions" />
                </div>
            </section>

            <section className="info-section">
                <h2>Why Emotions Matter</h2>
                <p>
                    Movies have the power to move us—to make us laugh, cry, think, and feel.
                    At EmoRec, we recognize that what makes a movie meaningful is not just its story or genre,
                    but how it connects with you emotionally. By understanding the kinds of feelings you respond to—
                    whether joy, suspense, nostalgia, or sorrow—we can offer suggestions that go beyond surface-level
                    preferences. This emotional awareness allows EmoRec to provide recommendations that feel personal,
                    thoughtful, and right for the moment.
                </p>
            </section>

            <section className="info-section">
                <h2>How EmoRec Recommends</h2>
                <p>
                    EmoRec offers three ways to discover your next favorite film. First, we suggest movies similar to ones
                    you already like, based on their themes and the emotions they evoke. Second, we look at your viewing
                    history to find patterns in your taste and introduce you to films that match your style. Third, we help
                    you explore movies enjoyed by people who share your interests and emotional preferences. These methods
                    work together to offer recommendations that are not only relevant but meaningful—without needing you to
                    do any of the searching yourself.
                </p>
            </section>
        </main>
    );
}

export default MainPage
