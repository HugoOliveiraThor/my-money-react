import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valueBox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Total de créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 20' text='Total de debitos'/>
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Valor consolidado' /> 
                </Content>    
            </div>
        )
    }
}
export default Dashboard

