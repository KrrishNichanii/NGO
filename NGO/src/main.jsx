import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Protected from './components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
  path: '/' ,
  element: <App/> ,
  children: [
    {
      path: '' , 
      element: <Home/>
    } ,
    {
      path: '/login' ,
      element: <Protected authentication = {false} > <Login/> </Protected>
    } ,
    {
      path: '/signup' ,
      element: <Protected authentication = {false}>  <Signup/>  </Protected>
    }
  ]

  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>

)
