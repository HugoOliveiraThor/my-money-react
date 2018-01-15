import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import DashboardReducer from '../dashboard/dashBoardReducer'
import TabReducer from '../commom/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer