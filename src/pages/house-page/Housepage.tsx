import './Housepage.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectAllHouses } from '../../store/slices/housesSlice';
import { useSelector } from 'react-redux';
import StudentSelector from '../../components/student-selector/StudentSelector';

interface RouteParams {
    slug: string
};

function Housepage() {
    const { houseId } = useParams();
    const house = useSelector(selectAllHouses).find(house => house.id === (houseId !== undefined ? parseInt(houseId) : 1));

    return (
        <div className='house-wrapper'>
            <img className='house-background' src={house?.imageUrl} alt='' draggable='false' />
            <div className='house-content'>
                <StudentSelector students={[]}/>
            </div>
        </div>
    );
};

export default Housepage;