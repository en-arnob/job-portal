import React from "react";
import arnobx from "../assets/images/arnobx.jpeg";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProfileView = () => {
  return (
    <div className=''>
      <div className=' px-2 mx-4 rounded'>
        <div class='w-full px-8 py-4 mx-auto mt-16 bg-slate-200 rounded-lg shadow-md dark:bg-gray-800'>
          <div class='flex justify-center -mt-16 md:justify-end'>
            <img
              class='object-cover w-48 h-48 border-2 border-white rounded-full dark:border-blue-400'
              alt='Testimonial avatar'
              src={arnobx}
            />
          </div>

          <h2 class='mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl'>
            Khalid Arnob
          </h2>

          <div class='mt-2 text-gray-600 dark:text-gray-200'>
            Full Stack Web Developer
            <p className='flex gap-1'>
              <FaMapMarkerAlt className='text-red-500 mt-1' />
              Dhaka, Bangladesh
            </p>
          </div>

          <div class='flex justify-end mt-4'>
            <p
              href='/'
              class='text-sm md:text-lg font-medium cursor-pointer text-blue-700 dark:text-blue-300'
            >
              Update Profile
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 px-6 mx-6 bg-gray-200 rounded-lg'>
        <div class='flex justify-center'>
          <button class='flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 dark:border-gray-500 rounded-t-md -px-1 dark:text-white whitespace-nowrap focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-4 h-4 mx-1 sm:w-6 sm:h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
              />
            </svg>

            <span class='mx-1 text-sm sm:text-base'>Profile</span>
          </button>

          <button class='flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-4 h-4 mx-1 sm:w-6 sm:h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              />
            </svg>

            <span class='mx-1 text-sm sm:text-base'>Resume</span>
          </button>

          <button class='flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-4 h-4 mx-1 sm:w-6 sm:h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>

            <span class='mx-1 text-sm sm:text-base'>Messages</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
