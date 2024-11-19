import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ViewDetail from './components/ViewDetail/ViewDetail.jsx'
import Applied from './components/Applied/Applied.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'feature/:id',
        element:<ViewDetail></ViewDetail>,
        loader: ()=>fetch('jobs.json')
      },
      {
        path:'/Applied Jobs',
        element:<Applied></Applied>,
        loader: () => fetch('jobs.json')
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
