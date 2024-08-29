import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './components/pages/landingPage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <LandingPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
