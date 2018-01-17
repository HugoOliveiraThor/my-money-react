import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../commom/tab/tabActions'
import billingCycle from './billingCycle';


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUE = {}


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type:'BILLING_CYCLES_FECTHED',
        payload: request 
    }
}
//Somente é possivel fazer um dispatch dessa maneira por causa do REDUX MULTI 
export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values).then(resp => {
            toastr.success('Sucesso','Operação realizada com sucesso!')
            dispatch(init())
        }).catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
        return {
            type: 'TEMP'
        }
    }
}
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUE)
    ]
}

