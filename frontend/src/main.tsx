import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './style.css'
import App from './App'
import List from './project/list';

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<List />} />
        </Routes>
        {/* <App /> */}
    </BrowserRouter>,
)
