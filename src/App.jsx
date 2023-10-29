import { useState } from 'react';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div style={{ width: '100vw' }}>
        <Navigation />
        <div style={{ margin: '50px' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
