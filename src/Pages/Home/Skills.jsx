import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  let myskill = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(myskill, {
      duration: 3.5,
      ease: Power3.easeOut,
      y: 200,
      opacity: 0,
    });
  }, []);
  return (
    <>
      <div
        className="flex items-center justify-center sm:justify-between flex-wrap mt-5 md:px-64 phone"
        style={{ width: "100%", height: "50vh" }}
      >
        <div
          class="grid grid-flow-col grid-rows-4 grid-cols-6 gap-6 text-white text-center p-16 m-auto"
          ref={(el) => {
            myskill = el;
          }}
        >
          <div class="transform scale-110 -rotate-6 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">React</p>
          </div>
          <div class="transform scale-75 rotate-6 translate-x-2 translate-y-10 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">Angular</p>
          </div>
          <div class="transform scale-120 translate-y-11 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Vue</p>
          </div>
          <div class="transform translate-y-6 -translate-x-10  bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">MongoDB</p>
          </div>
          <div class="transform translate-x-20 translate-y-4 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">NodeJS</p>
          </div>
          <div class="transform scale-110 -rotate-6 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Express</p>
          </div>
          <div class="transform scale-75 rotate-6 translate-x-2 translate-y-10 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">MySQL</p>
          </div>
          <div class="transform scale-120 rotate-45 translate-y-10 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Python</p>
          </div>
          <div class="transform translate-y-24 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">C</p>
          </div>
          <div class="transform translate-x-20 translate-y-4 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">C++</p>
          </div>
          <div class="transform scale-110 -rotate-6 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Ionic</p>
          </div>
          <div class="transform scale-75 rotate-6 translate-x-2 translate-y-10 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">Cordova</p>
          </div>
          <div class="transform scale-110 translate-y-11 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">React Native</p>
          </div>
          <div class="transform translate-y-24 -translate-x-5 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Typescript</p>
          </div>
          <div class="transform translate-x-32 translate-y-4 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Firebase</p>
          </div>
          <div class="transform scale-110 -rotate-6 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">Arduino</p>
          </div>
          <div class="transform scale-75 rotate-6 translate-x-2 translate-y-10 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">RasberryPI</p>
          </div>
          <div class="transform scale-95 translate-y-11 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">ESP8266</p>
          </div>
          <div class="transform translate-y-24 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">HTML5</p>
          </div>
          <div class="transform translate-x-20 translate-y-4 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">CSS3</p>
          </div>
          <div class="transform scale-110 -rotate-6 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">SCSS</p>
          </div>
          <div class="transform scale-75 rotate-6 translate-x-2 translate-y-10 bg-pink-700 shadow-lg rounded w-36 h-16">
            <p class="m-4">Bash</p>
          </div>
          <div class="transform scale-95 translate-y-10 translate-x-12 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">PHP</p>
          </div>
          <div class="transform translate-y-10 translate-x-10  bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">django</p>
          </div>
          <div class="transform -translate-x-10 translate-y-4 bg-pink-700 shadow-lg rounded w-24 h-16">
            <p class="m-4">p5js</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
