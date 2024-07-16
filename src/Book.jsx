// About.jsx or About.js
import React from "react";

function Book() {
  return (
    <>
      <div className="h-auto flex flex-col justify-center items-center gap-20 py-28 ">
        <div>
          <h1 className="text-3xl font-serif text-green-600 ">
            About The Book
          </h1>
        </div>
        <div>
          <h1 className="text-6xl font-serif text-center">Why Am I So Happy</h1>
        </div>
        <div>
          <img
            className="book-image"
            src="./src/assets/Why Am I So happy.png"
            alt="Why Am I So Happy Book"
          />
          <div className="flex justify-center">
            <img className="h-28" src="./src/assets/gold.pngaward.png" alt="" />
            <img
              className="h-28"
              src="./src/assets/5star-review-seal.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="px-12 md:px-28 lg:px-44 xl:px-80 2xl:px-[600px]">
            <p className="text-wrap text-justify font-sans text-xl leading-10 tracking-widest">
              In this groundbreaking book, Paula Vail, a nationally recognized
              leader in personal empowerment, shares her own life’s challenges
              and accomplishments with the readers, and the critical tools you
              need to open the door to the incredible happiness that resides in
              each one of us – a joy that is the center of our being. Drawing
              from her research and personal life experiences, Vail weaves an
              inspirational and practical account of how we can begin to make
              changes in our lives through better choices and new attitudes. Why
              Am I So Happy? is an excellent guidebook with tools to find a
              happier life. A must-read for everyone trying to gain happiness as
              we find ourselves with increasing workloads, lots more stress, and
              negativity all around us, Why Am I So Happy?, isn’t only about how
              to become happier at work. It’s about how to reap the benefits of
              a happier and more positive mind-set to achieve the joy,
              gratefulness, light, love and success into our lives. You will get
              insights and tools that you can use in your own personal journey
              to find happiness and empowerment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
