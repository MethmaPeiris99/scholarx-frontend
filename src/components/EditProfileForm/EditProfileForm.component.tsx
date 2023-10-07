import React from 'react';
import { type Profile } from '../../types';

interface EditProfileFormProps {
  isLoading: boolean;
  profile: Profile;
  onSubmit: (formValues: {
    first_name: string;
    last_name: string;
    contact_email: string;
    linkedin_url: string;
    image_url?: string;
  }) => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = () => {
  return(
    <div className='grid grid-cols-2 gap-10'>
      <form autoComplete='off'>
        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            required
            className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            required
            className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-2">Primary Email</label>
          <input
            type="email"
            required
            className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            disabled
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-2">Contact Email</label>
          <input
            type="email"
            required
            className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-2">LinkedIn URL</label>
          <input
            type="text"
            required
            className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full">
        <button
          type="submit"
          className="bg-blue text-white rounded-md py-2 px-6"
        >
          Save
        </button>
      </div>
      </form>

      <div className="w-24 h-24 border-2 border-blue-500 rounded-full flex flex-col items-center justify-center ml-10 mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <p>Upload</p>
      </div>

    </div>
  );
}
export default EditProfileForm;
