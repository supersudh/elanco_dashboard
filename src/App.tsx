import './App.scss';
import SideBar from './components/SideBar';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Applications from './pages/Applications';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="RightContainer">
        <Navigation />
        <Routes>
          <Route path="/" element={<Applications />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
