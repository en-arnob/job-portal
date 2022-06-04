import axios from "axios";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateJobSection = () => {
  const [data, setData] = useState({
    token: localStorage.getItem("myToken"),
    title: "",
    body: "",
    tags: "",
    logoUrl: "",
    vaccancy: "",
    deadline: "",
    jobType: "Onsite",
  });

  const [error, setError] = useState(" ");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(data);

    try {
      const apiUrl = "http://localhost:8000/api/job-post";
      const { data: res } = await axios.post(apiUrl, data);

      //   window.location.reload();
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.errors[0]);
      }
    }
  };

  return (
    <section class='my-4 rounded-lg md:mx-6 bg-gray-100'>
      <div class='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div class='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
          <div class='lg:py-12 lg:col-span-2'>
            <h1 class='text-3xl font-extrabold sm:text-5xl'>
              Let us boost your
              <strong class='font-extrabold text-rose-700 sm:block'>
                Job Post.
              </strong>
            </h1>
            <p class='max-w-lg mt-4 sm:leading-relaxed sm:text-xl'>
              You can post a sponsored job that appears as one of the very first
              job cards in ICT.jobs
            </p>
            <div class='flex flex-wrap gap-4 mt-8 text-center'>
              <a
                class='block w-full no-underline px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring'
                href='/get-started'
              >
                Get Started
              </a>

              <a
                class='block no-underline w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring'
                href='/about'
              >
                Learn More
              </a>
            </div>
            <p class='text-rose-700 flex gap-2 max-w-lg mt-4 text-lg'>
              or post a regular one from here{" "}
              <AiOutlineArrowRight className='mt-2' />
            </p>
          </div>

          <div class='p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3'>
            <form class='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label class='sr-only' for='name'>
                  Title
                </label>
                <input
                  class='w-full p-3 text-sm border-gray-200 rounded-lg'
                  placeholder='Job Title'
                  type='text'
                  id='title'
                  onChange={handleChange}
                  value={data.title}
                  name='title'
                />
              </div>

              <div class='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label class='sr-only' for='tag'>
                    Tags
                  </label>
                  <input
                    class='w-full p-3 text-sm border-gray-200 rounded-lg'
                    placeholder='Tags/skills'
                    type='text'
                    id='text'
                    onChange={handleChange}
                    value={data.tags}
                    name='tags'
                  />
                </div>

                <div>
                  <label class='sr-only' for='vaccancy'>
                    Vaccancy
                  </label>
                  <input
                    class='w-full p-3 text-sm border-gray-200 rounded-lg'
                    placeholder='Vaccancy'
                    type='text'
                    id='vaccancy'
                    onChange={handleChange}
                    value={data.vaccancy}
                    name='vaccancy'
                  />
                </div>
                <div>
                  <label class='sr-only' for='deadline'>
                    Deadline
                  </label>
                  <input
                    class='w-full p-3 text-sm border-gray-200 rounded-lg'
                    placeholder='Deadline'
                    type='text'
                    id='deadline'
                    onChange={handleChange}
                    value={data.deadline}
                    name='deadline'
                  />
                </div>

                <div>
                  <label class='sr-only' for='image-url'>
                    Company Logo
                  </label>
                  <input
                    class='w-full p-3 text-sm border-gray-200 rounded-lg'
                    placeholder='Company-logo image url (optional)'
                    type='text'
                    id='logoUrl'
                    onChange={handleChange}
                    value={data.logoUrl}
                    name='logoUrl'
                  />
                </div>
              </div>

              <div class='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                <div>
                  <input
                    class='sr-only'
                    id='option1'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option1'
                    class='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span class='text-sm font-medium'> Onsite </span>
                  </label>
                </div>

                <div>
                  <input
                    class='sr-only'
                    id='option2'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option2'
                    class='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span class='text-sm font-medium'> Remote </span>
                  </label>
                </div>

                <div>
                  <input
                    class='sr-only'
                    id='option3'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option3'
                    class='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span class='text-sm font-medium'> Contractual </span>
                  </label>
                </div>
              </div>

              <div>
                <label class='sr-only' for='body'>
                  Post Body
                </label>
                <textarea
                  class='w-full p-3 text-sm border-gray-200 rounded-lg'
                  placeholder='Post Body'
                  rows='8'
                  id='message'
                  onChange={handleChange}
                  value={data.body}
                  name='body'
                ></textarea>
              </div>

              <div class='mt-4'>
                <button
                  type='submit'
                  class='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-indigo-700 rounded-lg sm:w-auto'
                >
                  <span class='font-medium'> Post Job </span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 ml-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateJobSection;