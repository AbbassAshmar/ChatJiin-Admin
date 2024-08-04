import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router.jsx';
import './index.css';
import UserContextProvider from './contexts/user-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={Router} />
    </UserContextProvider>
  </React.StrictMode>,
)
