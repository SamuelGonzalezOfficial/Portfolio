import React from 'react'

//Components
import { Hero } from '../features/Hero/Hero'
import { About } from '../features/About/About'
import { Skills } from '../features/Skills/Skills'
import { Projects } from '../features/Projects/Projects'
import { Contact } from '../features/Contact/Contact'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export { Home }