import React from 'react';
import { type Mentor } from '../../types';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => (
  <div className='w-52 border flex flex-col items-center p-6 rounded-md'>
    {mentor.profile.image_url !== null ? (
      <div
        className='w-24 h-24 border-2 border-blue-500 rounded-full mb-2'
      />
    ) : (
      <div
        className='w-24 h-24 border-2 border-blue-500 rounded-full mb-2'
      />
    )}
    <div>
      <p className='font-bold text-center'>
        {mentor.profile.first_name} {mentor.profile.last_name}
      </p>
      <div className='text-center mt-4'>
        <p>{mentor.application.designation}</p>
        <p className='text-gray-500'>{mentor.application.company_or_institution}</p>
      </div>
    </div>
  </div>
);

export default MentorCard;
