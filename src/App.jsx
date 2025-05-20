import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Dashboard/Navbar";
import Sidebar from "./Components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadering from "./Components/SignUp/Loadering/Loadering";
import Changepassword from "./Components/ResetPassword/Changepassword";
import Category from "./Components/Category/Category";
import LoginIn from "./Components/Login/LoginIn";
import NewPassword from "./Components/ResetPassword/Otp/NewPassword";
import MenuCategory from "./Components/MenuCategory/MenuCategory";
import Deal from "./Components/Deal/Deal";
import Order from "./Components/Order/Order";
import CategoryModal from "./Components/MenuCategory/Modalopen";
import ProtectedRoute from "./Components/ProtectedRouter/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<LoginIn />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/changepassword" element={<Changepassword />}></Route>
          <Route path="/newpassword" element={<NewPassword />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/menu" element={<MenuCategory />}></Route>
            <Route path="/deal" element={<Deal />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/modal" element={<CategoryModal />}></Route>
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
}

export default App;
