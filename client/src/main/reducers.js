import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashBoardReducer'
import TabReducer from '../commom/tab/tabReducer'


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tabs: TabReducer
})

export default rootReducer