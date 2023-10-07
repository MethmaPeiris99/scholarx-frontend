import React from 'react';

interface ChangePasswordFormProps {
  onSubmit: (props: {
    current_password: string;
    new_password: string;
    confirm_new_password: string;
  }) => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = () => {
  return (
    <form
      name="change_password"
      className="space-y-4 max-w-lg mx-auto"
      autoComplete="off"
    >
      <div className="w-full">
        <label className="block text-gray-700 mb-2">Current Password</label>
        <input
          type="password"
          name="current_password"
          required
          className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-700 mb-2">New Password</label>
        <input
          type="password"
          name="new_password"
          required
          className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-700 mb-2">Confirm New Password</label>
        <input
          type="password"
          name="confirm_new_password"
          required
          className="block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="bg-blue text-white rounded-md py-2 px-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
