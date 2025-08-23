import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Testimonials, Education, Experience, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Testimonials />
            <Contacts />
        </div>
    )
}

export default Main
