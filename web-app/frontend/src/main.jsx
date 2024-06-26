import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store";
import { Provider} from "react-redux";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomeScreen from "./screens/UserScreens/HomeScreen.jsx";
import LoginScreen from "./screens/UserScreens/LoginScreen.jsx";
import RegisterScreen from "./screens/UserScreens/RegisterScreen.jsx";
import ProfileScreen from "./screens/UserScreens/ProfileScreen.jsx";
import AdminScreen from './screens/AdminScreens/AdminScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute/>}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
    <Route path="/admin" element={<AdminScreen />}/>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
