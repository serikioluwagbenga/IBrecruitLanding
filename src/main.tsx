import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router'
import { webRouter } from './router/web.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={webRouter} />
  </React.StrictMode>
)
