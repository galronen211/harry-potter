import React from 'react'
import { Student } from '../../models/Student'
import Selector from '../common/selector/Selector';

interface StudentSelectorProps {
    students: Student[];
}

function StudentSelector({students}: StudentSelectorProps) {
  return (
    <div className='student-selector'>
        <Selector objects={students} className='student' linkable={true} />
    </div>
  )
}

export default StudentSelector