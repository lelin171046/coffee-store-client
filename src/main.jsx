import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Componenet/AddCoffee.jsx';
import UpdateCoffee from './Componenet/UpdateCoffee.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import AuthProvider from './assets/Providere/AuthProvider.jsx';
import Users from './Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5001/coffee')
  },
  {
    path:'add',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5001/coffee/${params.id}`)
  }
  ,
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>

  },
  {
    path: '/user',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5001/user')
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
