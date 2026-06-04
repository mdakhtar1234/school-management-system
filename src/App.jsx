import React from 'react'
import AddmissionForm from './components/AddmissionForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import NoticeBoard from './components/NoticeBoard'
import Students from './components/Students'
import Teacher from './components/Teacher'
import Result from './components/Result'
import Attendance from './components/Attendance'


const routers = createBrowserRouter([
  {  
    path:"",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"admission",
        element:<AddmissionForm/>
      },
      {
        path:"attendance",
        element:<Attendance/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"noticeboard",
        element:<NoticeBoard/>
      },
    {
        path:"student",
        element:<Students/>
      },
      {
        path:"teacher",
        element:<Teacher/>
      },
       {
        path:"result",
        element:<Result/>
      },
    ]

}])
function App() {
  return (
   <>
    <RouterProvider router={routers} />
  
   </>
  )
}

export default App