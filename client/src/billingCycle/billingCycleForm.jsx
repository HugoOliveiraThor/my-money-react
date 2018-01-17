import React, { Component } from 'react'
import { reduxForm, Field} from 'redux-form'
import labelAndInput from '../commom/form/labelAndInput'

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                <Field name='name' component={labelAndInput}
                       label='Nome' 
                       cols='12 4' 
                       placeholder='Informe o nome'/>
                <Field name='month' component={labelAndInput}
                        label='Mês'
                        cols= '12 4'
                        placeholder='Informe o mês'/>
                <Field name='year' component={labelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            
            </form>
        )
    }
}
// Com a flag , destroyOnUnmount eu consigo ter a possibilidade de usar quando o componente for destruido os dados do formulario não irem juntos 
export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

