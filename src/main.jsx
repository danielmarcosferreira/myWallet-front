import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import SignUpPage from './pages/SignUpPage.jsx/SignUpPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/signUp",
    element: <SignUpPage />
  },
  {
    path: "/home",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
