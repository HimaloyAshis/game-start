import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className='bg-[#6C3428] px-2'>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
    </QueryClientProvider>
  </div>
  // {/* </React.StrictMode>, */}
)
