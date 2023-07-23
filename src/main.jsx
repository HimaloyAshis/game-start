import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className='bg-[#F5F5F5] '>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
  // {/* </React.StrictMode>, */}
)
