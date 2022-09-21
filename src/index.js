import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pcbuilder } from './components/Pcbuilder';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/nav/NavBar';

// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Pcbuilder />
//         </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router>
            <Pcbuilder />
        </Router>
    </React.StrictMode>
);