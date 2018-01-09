import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsHeader'
import TabsContent from '../commom/tab/tabsContent'
import TabHeader from '../commom/tab/tabHeader'
import TabContent from '../commom/tab/tabContent'

class BillingCycle extends Component {
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
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <h1>Create</h1>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <h1>Update</h1>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <h1>Delete</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                   
                </Content>

            </div>

        )
    }
}

export default BillingCycle