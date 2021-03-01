import '../styles/index.scss'

import React from 'react'
import Recipes from "./Recipes"
import sword from "../images/swc-sword.jpg"

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <div>
                        Oh, hai, React!
                    </div>
                </section>
                <img src={sword} alt="sword" width="250" />
                <Recipes />
            </main>

            
        </>
    )
}

export default App
