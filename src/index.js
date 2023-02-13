import React from 'react';
import { createRoot } from 'react-dom/client';

const App = ()=> {
  return (
    <div>
      <h1>Front End</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
