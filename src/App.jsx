import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Developer from './components/Developer'
import Login from './components/Login'
import Signup from './components/Signup'
import StudentDashboard from './components/StudentMS/StudentDashboard'
import TeacherDashboard from './components/TeacherMS/TeacherDashboard'
import CoordinatorDashboard from './components/CoordinatorMS/CoordinatorDashboard'


const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signUp",
        element: <Signup />
      },

      {
        path: "dashboard",
        element: <Dashboard />
      },

      {
        path: "StudentDashboard",
        element: <StudentDashboard />
      },
      {
        path: "TeacherDashboard",
        element: <TeacherDashboard />
      },
      {
        path: "CoordinatorDashboard",
        element: <CoordinatorDashboard />
      },

      {
        path: "developer",
        element: <Developer />
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