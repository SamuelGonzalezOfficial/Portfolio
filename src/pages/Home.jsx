import React from 'react'

//Components
import { Hero } from '../features/Hero/Hero'
import { About } from '../features/About/About'
import { Skills } from '../features/Skills/Skills'
import { Projects } from '../features/Projects/Projects'
import { Contact } from '../features/Contact/Contact'
import { Footer } from '../features/Footer/Footer'
import { Menu } from '../features/Menu/Menu'

function Home() {
    return (
        <>
            <Menu />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export { Home }