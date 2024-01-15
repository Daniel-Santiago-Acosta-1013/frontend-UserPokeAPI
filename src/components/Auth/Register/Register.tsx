import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../api/authService';
import Swal from 'sweetalert2';
import './register.scss';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(username, password);
            navigate('/login');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Error al registrar usuario',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Error al registrar', error);
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Register</button>
                <p className="switch-form">
                    ¿Ya estás registrado? <Link to="/login">Iniciar sesión</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
