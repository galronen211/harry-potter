import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Homepage from './pages/home-page/Homepage';
import SideNav from './components/common/side-nav/SideNav';
import Housepage from './pages/house-page/Housepage';
import { fetchHouses, getHousesError, getHousesStatus, selectAllHouses } from './store/slices/housesSlice';
import { AppDispatch } from './store/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const houses = useSelector(selectAllHouses);
  const housesStatus = useSelector(getHousesStatus);
  const error = useSelector(getHousesError);

  const [sideNavOpened, setSideNavOpened] = useState(false);

  let content;

  useEffect(() => {
    if (housesStatus === 'idle') {
      dispatch(fetchHouses());
    }
  }, [housesStatus, dispatch]);

  return (
    <div className='app'>
      <Header setSideNavOpened={setSideNavOpened} />
      <SideNav sideNavOpened={sideNavOpened} setSideNavOpened={setSideNavOpened} links={houses} />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/house' element={<Housepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
