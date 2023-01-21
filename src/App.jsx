import { useState } from 'react'

import './App.css'
import store from './features/store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/counter';
import "tailwindcss/tailwind.css"
import Login from './features/login/Login';

function App() {

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default App
