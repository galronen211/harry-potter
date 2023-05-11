import './HouseSelector.css'
import React from 'react'
import { House } from '../../models/House';

export type HouseSelectorProps = {
    houses: House[];
}

function HouseSelector({houses}: HouseSelectorProps) {
    const imageList = houses.map((house: House) => <img src={house.imageUrl} alt='' className='house-banner'></img>);


  return (
    <div className='house-selector'>
        {imageList}
    </div>
  );
}

export default HouseSelector