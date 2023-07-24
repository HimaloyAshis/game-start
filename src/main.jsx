import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
// import AuthProvider from './pages/provider/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div >
    {/* <AuthProvider> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
      </QueryClientProvider>
    {/* </AuthProvider> */}
  </div>
  // {/* </React.StrictMode>, */}
)
