import React from 'react'

//Components
import { Menu } from '../features/menu/Menu'
import { Hero } from '../features/hero/Hero'
import { Contact } from '../features/contact/Contact'
import { Testimonials } from '../features/testimonials/Testimonials'
import { About } from '../features/about/About'
import { Vision } from '../features/vision/Vision'
import { Services } from '../features/services/Services'

function Landing() {
    return (
        <React.Fragment>
            <Menu />
            <Hero />
            <Testimonials />
            <About />
            <Vision />
            <Services />
        </React.Fragment>
    )
}

export { Landing }