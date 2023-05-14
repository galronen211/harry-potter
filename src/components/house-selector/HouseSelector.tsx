import './HouseSelector.css'
import { Link } from 'react-router-dom';
import { House } from '../../models/House';
import Selector from '../common/selector/Selector';

export type HouseSelectorProps = {
    houses: House[];
}

function HouseSelector({houses}: HouseSelectorProps) {
  return (
    <div className='house-selector'>
        <Selector objects={houses} className='house' linkable={true} />
    </div>
  );
}

export default HouseSelector