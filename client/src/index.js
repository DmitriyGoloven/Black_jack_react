import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from "./store/store";
import Game from "./components/Game/Game";
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Game/>
    </Provider>
)

