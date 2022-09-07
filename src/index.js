import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pcbuilder } from './components/Pcbuilder';
import './index.css';

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