import React from 'react'

//Components
import { Menu } from '../features/menu/Menu'
import { Hero } from '../features/hero/Hero'
import { Contact } from '../features/contact/Contact'

function Landing() {
    return (
        <React.Fragment>
            <Menu />
            <Hero />
            <Contact />
        </React.Fragment>
    )
}

export { Landing }