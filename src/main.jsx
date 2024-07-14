import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import './styles/index.css'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Search from './components/Search.jsx'
import Snippet from './components/Snippet.jsx'
import CodeDisplay from './components/CodeDisplay.jsx'
import EditSnippet from './components/EditSnippet.jsx'
import AddSnippet from './components/AddSnippet.jsx'
import AllSnippet from './components/AllSnippet.jsx'
import LoginPage from './Pages/Authentication/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isAuthenticated = localStorage.getItem("libarayToken")

const PrivateRoute = ({element:Component} )=>{
  return isAuthenticated === "staylogin" ? <Component /> :<Navigate to="/" replace />
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />
      <Route path="/home" element={<PrivateRoute element = {Home} />} />
      <Route path="search" element={<PrivateRoute element = {Search} />} />
      <Route path="snippet" element={<Snippet />} />
      <Route path="addsnippet" element={<AddSnippet />} />
      <Route path="codedisplay" element={<CodeDisplay />} />
      <Route path="editsnippet/:id" element={<EditSnippet />} />
      <Route path="allsnippet" element={<AllSnippet />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
