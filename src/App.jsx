import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {Home,
  Order,
  Cart,
  Dashboard,
  NoPage, Login, Signup, ProductInfo,AddProduct,UpdateProduct} from "./pages/index"
  import MyState from './context/data/myState';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <MyState>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/order" element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addproduct" element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/updateproduct" element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            } />
            <Route path='/productinfo/:id' element={<ProductInfo/>}/>
            <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
    
  )
}

export default App

//user

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

//admin
const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem("user"))
  if(admin.user.email === "vidhiparmar1559@gmail.com"){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}