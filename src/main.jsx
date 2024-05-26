import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import SignUpPage from './pages/SignUpPage.jsx/SignUpPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import NewEntry from './pages/NewInput/NewInput.jsx'
import NewOutput from './pages/NewOutput/NewOutput.jsx'
import AuthProvider from './context/AuthProvider.jsx'

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
  },
  {
    path: "/newEntry",
    element: <NewEntry />
  },
  {
    path: "/newOutput",
    element: <NewOutput />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
