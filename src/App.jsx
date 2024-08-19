import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";

export const TokenContext = createContext();
export const UserContext = createContext();

function App() {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      }
  }, []);
    let User = {
    name: "John Doe",
    email: "john@example.com",
    password: "password",
  };
  localStorage.setItem("user", JSON.stringify(User));
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, settoken }}>
          <Routes>
            <Route
              index
              element={
                <MainLayout>
                  <Home></Home>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/product/:id"
              element={
                <MainLayout>
                  <Products></Products>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About></About>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <MainLayout>
                  <Cart></Cart>
                </MainLayout>
              }
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            {token && (
              <>
                <Route
                  path="/orders"
                  element={
                    <MainLayout>
                      <Orders></Orders>
                    </MainLayout>
                  }
                ></Route>
                <Route
                  path="/checkout"
                  element={
                    <MainLayout>
                      <Checkout></Checkout>
                    </MainLayout>
                  }
                ></Route>
              </>
            )}
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </TokenContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
