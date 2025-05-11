import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './components/Tienda';
import Catalogo from './components/Catalogo';

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Tienda />} />
            <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);