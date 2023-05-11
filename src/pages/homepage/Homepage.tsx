import './Homepage.css'
import React from 'react'
import HouseSelector from '../../components/HouseSelector'

function Homepage() {
    const houses = [
        {
          id: 1,
          name: 'Slytherin',
          imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
        },
        {
          id: 2,
          name: 'Griffindor',
          imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
        },
        {
          id: 3,
          name: 'Hufflepuff',
          imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
        },
        {
          id: 4,
          name: 'Ravenclaw',
          imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
        }
      ];

  return (
    <div className='body'>
        <HouseSelector houses={houses}/>
    </div>
  )
}

export default Homepage