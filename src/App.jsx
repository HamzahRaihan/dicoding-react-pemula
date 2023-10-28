import { useState } from 'react';

import './App.css';

function App() {
  const [names, setNames] = useState(['Asep', 'Alex', 'Bagus', 'Cika', 'Doni']);

  return (
    <>
      <ol>
        {names.map((item, index) => (
          <div key={index}>
            <li>{item.toUpperCase()}</li>
          </div>
        ))}
      </ol>
    </>
  );
}

export default App;
