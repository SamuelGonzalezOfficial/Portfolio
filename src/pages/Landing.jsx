import React from 'react'

//Components
import { Menu } from '../features/menu/Menu'
import { Hero } from '../features/hero/Hero'
import { Contact } from '../features/contact/Contact'
import { Testimonials } from '../features/testimonials/Testimonials'

function Landing() {
    return (
        <React.Fragment>
            <Menu />
            <Hero />
            <Testimonials />
        </React.Fragment>
    )
}

export { Landing }