import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tienda() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Bienvenido a Desarrollo Web</h1>
            <button onClick={() => navigate('/catalogo')}
            >
                Siguiente
            </button>
        </div>
    );
}