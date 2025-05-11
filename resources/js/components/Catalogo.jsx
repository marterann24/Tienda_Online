import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Catálogo de Productos</h1>
            <button onClick={()=> navigate('/home')}
              //onClick={() => navigate(-1)} // Volver atrás
              >
                Regresar
            </button>
        </div>
    );
}