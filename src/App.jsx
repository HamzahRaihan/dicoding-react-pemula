import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div style={{ width: '100vw' }}>
        <Navigation />
        <div style={{ margin: '50px' }}>
          <div>
            <h5>This website made in purpose of learning react by course from dicoding</h5>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
