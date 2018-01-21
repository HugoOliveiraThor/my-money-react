import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector} from 'redux-form'
import { init } from './billingCylcleActions'

import labelAndInput from '../commom/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                <Field name='name' component={labelAndInput}
                       label='Nome'
                       readOnly={readOnly} 
                       cols='12 4' 
                       placeholder='Informe o nome'/>
                <Field name='month' component={labelAndInput}
                        label='Mês'
                        readOnly={readOnly}
                        cols= '12 4'
                        placeholder='Informe o mês'/>
                <Field name='year' component={labelAndInput}
                        label='Ano'
                        readOnly={readOnly}
                        cols='12 4'
                        placeholder='Informe o ano'/>
                <ItemList cols='12 6' 
                          list={credits} 
                          readOnly={readOnly} 
                          field='credits'
                          legend='Créditos'/>        
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            
            </form>
        )
    }
}
// Com a flag , destroyOnUnmount eu consigo ter a possibilidade de usar quando o componente for destruido os dados do formulario não irem juntos 
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm) 
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)

// FormValueSelector => Pegar dados que o redux-form está manipulado
// billingCycleForm e o id do nosso form 


