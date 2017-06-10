import React from 'react'
import ReactDOM from 'react-dom'
import {createStore } from 'redux'
//import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//import promise from 'redux-promise'
//import multi from 'redux-multi'
//import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

/*
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))
*/

//Definir a Store(estado unico da app)passando o rootReducers que combina todos os reducers
const store = createStore(reducers)

ReactDOM.render(
    <App/>
, document.getElementById('app'))
