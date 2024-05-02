import {
  Routes as RoutesWrapper,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users/TablesUsers";
import Home from "../pages/home";
import PrivateRoute from "./PrivateRoute";
import { NotFound } from "../pages/notfound";
import NewUserLogin from "../pages/login/NewUser";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Login />} />

      {/* <Route path="/new-user" element={<NewUserLogin />} /> */}

      <Route path="*" element={<NotFound />} />

      <Route path="/home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }

      />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
      />
      <Route path="/users" element={
        <PrivateRoute>
          <Users />
        </PrivateRoute>
      }
      />
    </RoutesWrapper>

  );
}