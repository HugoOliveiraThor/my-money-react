import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../commom/tab/tabActions'
import billingCycle from './billingCycle';


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUE = {credits: [{}]}


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type:'BILLING_CYCLES_FECTHED',
        payload: request 
    }
}
//Somente é possivel fazer um dispatch dessa maneira por causa do REDUX MULTI 
export function create(values) {
    return submit(values, 'post')
}
export function update(values) {
    return submit(values, 'put')
}
export function deleta(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values).then(resp => {
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

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
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

