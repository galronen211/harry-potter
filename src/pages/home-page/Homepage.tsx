import './Homepage.css'
import React from 'react'
import HouseSelector from '../../components/house-selector/HouseSelector'

function Homepage() {
    const houses = [
        {
          id: 1,
          name: 'Slytherin',
          imageUrl: '/logos/slytherin-logo.png'
        },
        {
          id: 2,
          name: 'Griffindor',
          imageUrl: '/logos/gryfindor-logo.png'
        },
        {
          id: 3,
          name: 'Hufflepuff',
          imageUrl: '/logos/hufflepuff-logo.png'
        },
        {
          id: 4,
          name: 'Ravenclaw',
          imageUrl: '/logos/ravenclaw-logo.png'
        }
      ];

  return (
    <div className='body'>
        <HouseSelector houses={houses}/>
    </div>
  )
}

export default Homepage