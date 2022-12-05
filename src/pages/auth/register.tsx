import React from 'react';

const Register = () => {
  return (
    <div
      className='min-h-screen py-40'
      // style={{
      //   background-image: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)'
      //   }}
    >
      <div className='container mx-auto'>
        <div className='mx-auto flex w-10/12 flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:w-8/12 lg:flex-row'>
          <div
            className='flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2'
            // style="{{background-image: url('images/Register-Background.png');}}"
          >
            <h1 className='mb-3 text-3xl text-white'>Welcome</h1>
            <div>
              <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{' '}
                <a href='#' className='font-semibold text-purple-500'>
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className='w-full py-16 px-12 lg:w-1/2'>
            <h2 className='mb-4 text-3xl'>Register</h2>
            <p className='mb-4'>
              Create your account. It’s free and only take a minute
            </p>
            <form action='#'>
              <div className='grid grid-cols-2 gap-5'>
                <input
                  type='text'
                  placeholder='Firstname'
                  className='border border-gray-400 py-1 px-2'
                />
                <input
                  type='text'
                  placeholder='Surname'
                  className='border border-gray-400 py-1 px-2'
                />
              </div>
              <div className='mt-5'>
                <input
                  type='text'
                  placeholder='Email'
                  className='w-full border border-gray-400 py-1 px-2'
                />
              </div>
              <div className='mt-5'>
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full border border-gray-400 py-1 px-2'
                />
              </div>
              <div className='mt-5'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  className='w-full border border-gray-400 py-1 px-2'
                />
              </div>
              <div className='mt-5'>
                <input type='checkbox' className='border border-gray-400' />
                <span>
                  I accept the{' '}
                  <a href='#' className='font-semibold text-purple-500'>
                    Terms of Use
                  </a>{' '}
                  &{' '}
                  <a href='#' className='font-semibold text-purple-500'>
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className='mt-5'>
                <button className='w-full bg-purple-500 py-3 text-center text-white'>
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
