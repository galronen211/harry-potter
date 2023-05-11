import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/home-page/Homepage';
import SideNav from './components/side-nav/SideNav';
import Housepage from './pages/house-page/Housepage';

function App() {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  return (
    <div className='app'>
      <Header setSideNavOpened={setSideNavOpened} />
      <SideNav sideNavOpened={sideNavOpened} setSideNavOpened={setSideNavOpened}/>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/house' element={<Housepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
