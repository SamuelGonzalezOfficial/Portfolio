import React from 'react'

//Components
import { Hero } from '../features/Hero/Hero'
import { Skills } from '../features/Skills/Skills'

function Home() {
    return (
        <>
            <Hero />
            <Skills />
        </>
    )
}

export { Home }