import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="w-[1340px] h-max mx-auto bg-[#FFFFFF] mt-[43px] rounded-[10px]">
                <App/>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
