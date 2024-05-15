import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
