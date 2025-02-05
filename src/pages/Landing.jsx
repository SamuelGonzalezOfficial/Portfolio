import React from 'react'

//Components
import { Menu } from '../features/menu/Menu'
import { Hero } from '../features/hero/Hero'

function Landing() {
    return (
        <React.Fragment>
            <Menu />
            <Hero />
        </React.Fragment>
    )
}

export { Landing }