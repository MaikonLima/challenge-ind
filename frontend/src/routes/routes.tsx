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
import NotFound from "../pages/notfound";

export default function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Login />} />

            <Route path="*" element={<NotFound />} />

            <Route path="/home" element={
                <Home />
            }

            />
            <Route path="/dashboard" element={
                <Dashboard />
            }
            />
            <Route path="/users" element={
                <Users />
            }
            />
        </RoutesWrapper>

    );
}