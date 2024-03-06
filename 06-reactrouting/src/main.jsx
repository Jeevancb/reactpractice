import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Github,{githubInfoLoader} from './components/github/Github.jsx'
import User from './components/user/User.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path="contact/" element={<Contact/>}>  
      </Route>
      <Route path="about/" element={<About/>}/>
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github/>}/>
      <Route path="user/" element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
