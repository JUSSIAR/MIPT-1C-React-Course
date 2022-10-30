import React from 'react'
import {Outlet} from 'react-router-dom'

import Header from '../../common/components/header/header'
import Footer from '../../common/components/footer/footer'
import ContentHolder from '../../common/components/content-holder/content-holder'

function Layout() {
    return (
        <>
            <Header/>
            <ContentHolder>
                <Outlet/>
            </ContentHolder>
            <Footer/>
        </>
    )
}

export default Layout
