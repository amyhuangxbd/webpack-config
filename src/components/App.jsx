import '../styles/index.scss'

import React from 'react'
import Recipes from "./Recipes"

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
            </main>

            <Recipes />
        </>
    )
}

export default App
