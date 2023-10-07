import React from 'react';
import { type Mentor } from '../../types';
import MentorCard from '../MentorCard/MentorCard.component';

interface ListProps {
  mentors?: Mentor[];
}

export const MentorList: React.FC<ListProps> = ({ mentors }: ListProps) => (
  <div className='grid grid-cols-4 gap-4'>
    {mentors?.map((mentor) => (
      <div key={mentor.mentor_id}>
        <MentorCard mentor={mentor} />
      </div>
    ))}
  </div>
);
