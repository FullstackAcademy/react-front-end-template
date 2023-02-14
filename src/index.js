import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from '/src/App.js';

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);

