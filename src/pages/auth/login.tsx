import Link from 'next/link';
import React from 'react';

import BgImg from '~/images/auth/registerBackground.png';

const Login = () => {
  return (
    <div
      className='min-h-screen py-40'
      style={{
        backgroundImage: 'linear-gradient(115deg, #20202B, #E97991)',
      }}
    >
      <div className='container mx-auto'>
        <div className='mx-auto flex w-10/12 flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:w-8/12 lg:flex-row'>
          <div className='w-full py-16 px-12 lg:w-1/2'>
            <h2 className='mb-4 text-3xl'>Login</h2>
            <p className='mb-4'>Please log in to your account</p>
            <form action='#'>
              <div className='mt-5'>
                <input
                  type='email'
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
              <div className='my-5 flex items-center justify-between'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
                    id='exampleCheck2'
                  />
                  <label className='form-check-label inline-block text-gray-800'>
                    Remember me
                  </label>
                </div>
                <a href='#!' className='text-gray-800 underline'>
                  Forgot password?
                </a>
              </div>
              <div className='mt-5'>
                <button className='w-full rounded-xl bg-pink-400 py-3 text-center font-semibold text-white shadow-lg transition duration-500 hover:scale-110 hover:shadow-2xl'>
                  Log In
                </button>
              </div>
              <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
                <p className='mx-4 mb-0 text-center font-semibold'>OR</p>
              </div>

              <a
                className='mb-3 flex w-full items-center justify-center rounded px-7 py-3  text-sm font-medium uppercase leading-snug text-white shadow-lg transition duration-500 hover:scale-110 hover:shadow-2xl'
                style={{
                  backgroundColor: '#3b5998',
                }}
                href='#!'
                role='button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                  className='mr-2 h-3.5 w-3.5'
                >
                  <path
                    fill='currentColor'
                    d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                  />
                </svg>
                Continue with Facebook
              </a>
              <p className='mt-2 mb-0 pt-1 text-sm font-semibold'>
                Don't have an account?
                <Link
                  href='/auth/register'
                  className='text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700'
                >
                  {' '}
                  Register
                </Link>
              </p>
            </form>
          </div>
          <div
            className='flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2'
            style={{
              backgroundImage: `url(${BgImg.src})`,
            }}
          >
            <h1 className='mb-3 text-3xl text-white'>Welcome</h1>
            <div>
              <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{' '}
                <a href='#' className='font-semibold text-pink-400'>
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
