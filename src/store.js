import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addCharactersReducer } from './redux/reducers/addCharactersReducer'
import { pageCounterReducer } from './redux/reducers/pageCounterReducer'
import { filterReducer } from './redux/reducers/filterReducer'
import { modalReducer } from './redux/reducers/modalReducer'

const reduser = combineReducers({ addCharactersReducer, pageCounterReducer, filterReducer, modalReducer })

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))

export default store
