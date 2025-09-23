import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import Entrance from './pages/entrance/Entrance.tsx'
import Login from './pages/entrance/login/Login.tsx'
import Register from './pages/entrance/register/Register.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/", element: <Entrance/>, children: [
        {
          path: "login", element: <Login/>
        },
        {
          path: "register", element: <Register/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
