import React from 'react'

//Components
import { Hero } from '../features/Hero/Hero'
import { About } from '../features/About/About'
import { Skills } from '../features/Skills/Skills'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
        </>
    )
}

export { Home }