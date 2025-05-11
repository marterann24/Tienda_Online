import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './components/Tienda';
import Catalogo from './components/Catalogo';
import Login from './components/Login'; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Tienda />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
