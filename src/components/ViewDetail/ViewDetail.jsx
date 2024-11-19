import React, { useId } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobIdToLocalStorage } from "../Utils/localStorage";
const ViewDetail = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const { id } = useParams();
  const userId = parseInt(id);
  const handleApplyJob = () => {
    saveJobIdToLocalStorage(userId)
    toast("Wow so easy!")
  }

  const job = jobs.find((job) => job.id === userId);
  console.log(job);
  return (
    <div>
      <h1 className="text-[48px] text-center">View Details{jobs.length} </h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div>
            <h3>Job Description:</h3> <p>{job.job_description} </p>
          </div>
          <h3>Job Respnsibility: {job.job_responsibility} </h3>
          <h3>Educational Requirements: {job.educational_requirements} </h3>
          <p>Experiences: {job.Experiences} </p>
        </div>
        <div className="mb-5">
          <div className="border p-5">
            <h3> Job Details: </h3>
            <p>Salary: {job.salary} </p>
            <p> Job Title: {job.job_title} </p>
            <p>Contact Information: </p>
            <p className="flex items-center gap-5">
              <BsFillTelephoneFill className="text-2xl" /> Email:{" "}
              {job.contact_information.email}{" "}
            </p>
            <p className="flex items-center gap-5">
              <BsFillTelephoneFill className="text-2xl" /> Email:{" "}
              {job.contact_information.email}{" "}
            </p>
            <p className="flex items-center gap-5">
              <BsFillTelephoneFill className="text-2xl" /> Email:{" "}
              {job.contact_information.email}{" "}
            </p>
          </div>
          <button onClick={handleApplyJob} className="btn w-full btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] px-10 py-5 mt-5 ">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewDetail;
