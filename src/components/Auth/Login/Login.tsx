import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/authService';
import Swal from 'sweetalert2';
import axios from 'axios';
import './login.scss';

interface LoginProps {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(username, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            setIsAuthenticated(true);
            navigate('/favorites');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.error || 'Error en inicio de sesión',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                console.error('Error en inicio de sesión', error.response.data.error);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Se produjo un error inesperado',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                console.error('Error en inicio de sesión', error);
            }
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
                <p className="switch-form">
                    ¿No estás registrado? <Link to="/register">Regístrate</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
