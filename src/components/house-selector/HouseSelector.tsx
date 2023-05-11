import './HouseSelector.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { House } from '../../models/House';

export type HouseSelectorProps = {
    houses: House[];
}

function HouseSelector({houses}: HouseSelectorProps) {
    const imageList = houses.map((house: House) => {
    return (
      <Link to='/house'>
        <img src={house.imageUrl} alt='' className='house-banner'></img>
      </Link>
    );
});


  return (
    <div className='house-selector'>
        {imageList}
    </div>
  );
}

export default HouseSelector