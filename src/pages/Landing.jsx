import React from 'react'

//Components
import { Menu } from '../features/menu/Menu'
import { Hero } from '../features/hero/Hero'
import { Contact } from '../features/contact/Contact'
import { Testimonials } from '../features/testimonials/Testimonials'
import { About } from '../features/about/About'
import { Services } from '../features/services/Services'

function Landing() {
    return (
        <React.Fragment>
            <Menu />
            <Hero />
            <Testimonials />
            <About />
            <Services />
        </React.Fragment>
    )
}

export { Landing }