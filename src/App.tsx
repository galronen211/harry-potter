import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import SideNav from './components/side-nav/SideNav';

function App() {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  return (
    <div className='app'>
      <Header setSideNavOpened={setSideNavOpened} />
      <SideNav sideNavOpened={sideNavOpened} setSideNavOpened={setSideNavOpened}/>
      <Homepage />
    </div>
  );
}

export default App;
