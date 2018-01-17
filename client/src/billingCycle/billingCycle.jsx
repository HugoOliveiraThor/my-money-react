import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsHeader'
import TabsContent from '../commom/tab/tabsContent'
import TabHeader from '../commom/tab/tabHeader'
import TabContent from '../commom/tab/tabContent'
import { selectTab, showTabs } from '../commom/tab/tabActions'
import { create, update , deleta } from '../billingCycle/billingCylcleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamento' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                            <Form onSubmit={this.props.deleta} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>  bindActionCreators({selectTab, showTabs, create, update, deleta}, dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)