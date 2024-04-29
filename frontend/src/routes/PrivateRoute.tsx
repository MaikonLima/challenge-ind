import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/AuthProvider/useGlobalContext';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

interface IPrivateRoute {
    children: React.ReactElement;
}

export default function PrivateRoute({ children }: IPrivateRoute) {
    const { isAuthenticated, setAuthenticated } = useGlobalContext();
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuthenticated()) {
            setAuthenticated(false);
            navigate('/');
        }
    }, [location]);


    return children;
}
