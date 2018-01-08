import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamento' small='Cadastro'/>
                <Content>
                    Ciclos de pagamento
                </Content>

            </div>

        )
    }
}

export default BillingCycle