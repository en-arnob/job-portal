import React, { Fragment, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import NoAccess from "./components/NoAccess";
import axios from "axios";

const ShowUserCandidates = () => {
  const token = localStorage.getItem("myToken");
  const usr = jwt_decode(token);
  const user = usr.user;
  console.log(user.id);
  const [candidates, setCandidates] = useState([]);
  const [errors, setErrors] = useState([]);
  const fetchCandidates = () => {
    axios
      .get(`http://localhost:8000/api/${user.id}/fetchCandidates`)
      .then((response) => {
        const allCandidates = response.data.candidates;
        setCandidates(allCandidates);
        // console.log(allJobs);
      })
      .catch((error) => {
        setErrors(error);
      });
  };
  useEffect(() => {
    if (usr.user.usertype === "recruiter") {
      fetchCandidates();
    } else {
      setCandidates([]);
    }
  }, []);

  return (
    <Fragment>
      {token && usr.user.usertype === "recruiter" ? (
        <div className='p-2 mx-4'>
          <div className='flex-col gap-2 mb-4'>
            <h2 className='bg-yellow-200 px-2 py-2 inline rounded-lg font-normal text-lg md:text-xl text-gray-800'>
              Available Job Seekers
            </h2>
            <h2 className=' px-4 py-2 inline rounded-lg font-normal text-sm text-gray-800'>
              Back to Home
            </h2>
          </div>

          {candidates.map((candidate) => {
            return <h1>{candidate.fullname}</h1>;
          })}
        </div>
      ) : (
        <NoAccess />
      )}
    </Fragment>
  );
};

export default ShowUserCandidates;
