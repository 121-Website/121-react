import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContext';
import './index.css';
import Navigation from './navigation/Navigation';

import { createPortal } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <Navigation />
        </UserContextProvider>
    </React.StrictMode>
);

const modalRoot = document.querySelector('#transition');
export const Modal = ({ children }) => createPortal(children, modalRoot);
