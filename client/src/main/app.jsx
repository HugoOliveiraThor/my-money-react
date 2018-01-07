import '../commom/template/dependencies'
import React from 'react'

import Header from '../commom/template/header'
import SideBar from '../commom/template/sideBar'
import Footer from '../commom/template/footer'

export default props => (
        <div className='wrapper'>
        <Header /> 
        <SideBar />
        <div className='content-wrapper'>
                <h1>Conteudo</h1>
        </div> 
        <Footer />
        </div>
)