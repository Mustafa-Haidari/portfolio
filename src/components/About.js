import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/profile.JPG";

const About = () => {
  return (
    <div className="h-screen pt-40 sm:pt-40 md:pt-40 p-8">
      <div className="mx-auto flex flex-col gap-6 w-full sm:flex-row">
        <img
          className="rounded-2xl mx-auto w-60 object-cover"
          src={img}
          alt={img}
        />
        <div className="p-2 pt-0 sm:mt-4">
          <div className="tracking-wide text-4xl text-[#d4972e] font-semibold font-signature">
            Mustafa Haidari
          </div>
          <div className="mt-2 text-white text-base">
            I am a driven web developer with a strong passion for developing
            innovative solutions with around 1 year of experience in both
            frontend and backend. I have the ability to leverage a wide breadth
            of knowledge to build reliable systems throughout the entire
            lifecycle of a project . I enjoy challenging projects and thrive in
            a collaborative environment where I can contribute and learn from my
            peers.
          </div>

          <div className="mt-4 flex justify-center sm:justify-start gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mustafa-Haidari"
            >
              <button className="text-white w-fit px-4 py-2 gap-2 my-2 flex items-center rounded-md hover:text-[#d4972e] bg-gradient-to-r from-stone-500 to-gray-500 cursor-pointer">
                GitHub
                <span className="">
                  <FaGithub />
                </span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-haidari-1299b9134/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="text-white w-fit px-4 py-2 gap-2 my-2 flex items-center rounded-md hover:text-orange-500 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                LinkedIn
                <span className="">
                  <FaLinkedin />
                </span>
              </button>
            </a>
          </div>

          <div className="tracking-wide text-2xl mt-6 text-[#d4972e] font-semibold">
            Education and certificates:
          </div>
          <div className="mt-2 text-white text-base">
            Diploma of Software Development | TAFE QLD 2021
          </div>
          <div className="mt-2 text-white text-base">
            <a
              href="https://www.udemy.com/certificate/UC-a533be52-a09f-4353-b5e1-d20e4bacb936/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React - The Complete Guide (incl Hooks, React Router, Redux) |
              UDEMY 2023
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
