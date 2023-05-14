import './Homepage.css'
import React from 'react'
import HouseSelector from '../../components/house-selector/HouseSelector';
import { House } from '../../models/House';
import { selectAllHouses } from '../../store/slices/housesSlice';
import { useSelector } from 'react-redux';

export type HomepageProps = {
  houses: House[]
}

function Homepage() {
  const houses: House[] = useSelector(selectAllHouses);

  return (
    <div className='body'>
        <HouseSelector houses={houses} />
    </div>
  )
}

export default Homepage;