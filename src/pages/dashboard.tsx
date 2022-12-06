import React from 'react';

import ProtectedRoute from '@/components/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className='container mx-auto flex py-2'>
        <div className='mx-auto mt-24 overflow-y-hidden px-12 py-24 text-gray-600'>
          <h2 className='text-2xl font-semibold'>You are logged in!</h2>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
