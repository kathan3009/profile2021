import React, { useRef, useEffect } from "react";
import photo from "../../Assets/Images/profile1.jpeg";
import "./Top.css";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import github from "../../Assets/Images/github.png";
import twitter from "../../Assets/Images/twitter.png";
import spotify from "../../Assets/Images/spotify.png";
import cv from "../../Assets/Images/cv.png";
import { gsap, Power3 } from "gsap";

function Top() {
  let name = useRef(null);
  let smedia = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(name, { duration: 1.5, ease: Power3.easeOut, y: 200, opacity: 0 });
    tl.from(
      smedia,
      {
        duration: 1,
        ease: Power3.easeOut,
        y: 200,
        opacity: 0,
      },
      1
    );
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center sm:justify-between flex-wrap mt-5 sm:px-8 md:px-8 lg:px-32 phone"
        style={{ width: "100%", height: "70vh" }}
        ref={(el) => {
          name = el;
        }}
      >
        <div className="break-words h-80 w-96 text-center sm:text-left">
          <h1 className="text-5xl font-helvetica-b opacity-80">Hi, I am </h1>
          <h1 className=" text-5xl font-helvetica-b text-gray-700 hover:text-pink-700 transition duration-200">
            Kathan Desai.
          </h1>
          <p className="my-5 font-helvetica-l">
            I'm a 18-year-old Entrepreneur,Web Developer,App Developer,IoT
            Engineer,and Photographer from New Delhi.I am the Co-founder and COO
            of{" "}
            <span className="hover:text-green-900 transition duration-200 font-bold text-pink-700">
              <a href="https://bugbase.in" target="_blank" rel="noreferrer">
                BugBase
              </a>
            </span>
            .
          </p>
          <button className=" hidden sm:block  my-8 h-12 w-40 p-2 font-helvetica-b bg-blue-700 text-2xl text-white rounded-lg focus:outline-none ring-8 ring-blue-200 transform hover:scale-75  transition duration-700 ease-in-out">
            <a
              href="mailto:kthndesai@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Let's Talk
            </a>
          </button>
        </div>
        <div className="">
          <img
            className="shadow-lg rounded-lg h-48 w-48 sm:h-60 sm:w-60 sm:mt-0 md:h-80 md:w-80  filter grayscale transform hover:scale-105 transition duration-700 ease-in-out"
            src={photo}
            alt="BugBase COO"
          />
        </div>
      </div>
      <div
        className="flex flex-wrap items-center justify-between mt-5  sm:px-8 md:px-8 lg:px-32 phonesm"
        ref={(el) => {
          smedia = el;
        }}
      >
        {/* social media logos */}
        <a
          href="https://linkedin.com/in/kathan-desai-186441181"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={linkedIn}
            alt="BugBase Kathan LinkedIn"
            className=" w-10 h-10 md:w-16 md:h-16"
          />
        </a>
        <a
          href="https://www.instagram.com/kathan_desai_30/"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={instagram}
            alt="BugBase Kathan Instagram"
            className="w-10 h-10 md:w-16 md:h-16"
          />
        </a>
        <a
          href="https://github.com/kathan3009"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={github}
            alt="BugBase Kathan Github"
            className="w-10 h-10 md:w-16 md:h-16"
          />
        </a>
        <a
          href="https://twitter.com/kathandesai3009/"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={twitter}
            alt="BugBase Kathan Twitter"
            className="w-10 h-10 md:w-16 md:h-16"
          />
        </a>
        <a
          href="https://open.spotify.com/playlist/4G9J18a1NQIHQIKcNRKeSN?si=1be4129a1b854f2e"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={spotify}
            alt="BugBase Kathan Spotify"
            className="w-10 h-10 md:w-16 md:h-16"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1acPpg0C68pG7kkdjOQs_7b9vOv9kb3pA/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-75  transition duration-700 ease-in-out"
        >
          <img
            src={cv}
            alt="BugBase Kathan CV"
            className="w-10 h-10 md:w-16 md:h-16"
          />
        </a>
      </div>
    </>
  );
}

export default Top;
