import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Book from "./Book";
import Author from "./Author";
import Reviews from "./Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const detectSize = () => {
    if (window.innerWidth < 1024) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", detectSize);

    detectSize();

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <div className={navbar ? "stick" : "header"}>
        <div className="flex items-center w-96">
          <img
            className={navbar ? "logo" : ""}
            srcSet="./src/assets/why-am-i-so-happy-logo.png"
            alt="Why Am I So Happy Logo"
          />
        </div>
        <nav className="hidden lg:flex justify-center items-center gap-10 xl:gap-16 2xl:gap-32 w-screen">
          <a className="" href="#">
            Home
          </a>
          <a className="" href="#book">
            Book
          </a>
          <a href="#author">Author</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center justify-end w-full lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer"
            onClick={() => setShow(true)}
          />
        </div>
        <div
          id="home"
          className="hidden lg:w-64 lg:flex lg:justify-end lg:h-full lg:items-center"
        >
          <button className="hidden lg:buy-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
            </svg>
            Buy On Amazon
          </button>
        </div>
        <div className="">
          {show ? (
            <nav className="flex flex-col h-screen absolute right-0 top-0 bg-white w-32">
              <div className="">
                <FontAwesomeIcon
                  icon={faXmark}
                  className=" rounded cursor-pointer ml-20 mt-2.5 h-7 w-7 hover:text-[#61ce70]"
                  onClick={() => setShow(false)}
                  q
                />
              </div>

              <a
                className="flex  h-full items-center justify-center font-navbar  hover:text-[#61ce70]"
                href="#"
              >
                Home
              </a>
              <a
                className="flex  h-full items-center justify-center font-navbar  hover:text-[#61ce70]"
                href="#book"
              >
                Book
              </a>
              <a
                className="flex  h-full items-center justify-center font-navbar  hover:text-[#61ce70]"
                href="#author"
              >
                Author
              </a>
              <a
                className="flex  h-full items-center justify-center font-navbar  hover:text-[#61ce70]"
                href="#reviews"
              >
                Reviews
              </a>
              <a
                className="flex h-full items-center justify-center font-navbar hover:text-[#61ce70]"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          ) : null}
        </div>
      </div>

      <section className="h-screen hero flex flex-col sm:flex-row">
        <div className="hidden h-full md:block md:w-2/4"></div>
        <div className="flex flex-col gap-8 mt-20 p-6 justify-center md:p-0 md:mt-0 md:pt-20 md:gap-6 md:w-1/2 xl:pt-20 ">
          <h1 className="text-6xl font-navbar text-white sm:text-5xl 2xl:text-7xl">
            Paula Vail
          </h1>
          <p className="text-2xl text-white leading-10 font-para text-justify md:leading-10 md:text-2xl md:pr-10 xl:pr-32 xl:leading-loose 2xl:text-4xl 2xl:leading-loose">
            Paula Vail, RMT, is a distinguished and award-winning author,
            acclaimed radio and TV show host, and a revered Reiki Master/Teacher
            specializing in Usui Reiki. She is also the author of the uplifting
            and insightful book “Why Am I So Happy?”
          </p>
          <div>
            <button className="text-xl text-slate-200 font-sans py-2 px-6 bg-[#61ce70] rounded-xl hover:bg-green-700 md:text-xl md:py-2 md:px-6 lg:text-2xl lg:py-3 lg:px-8">
              Know More
            </button>
          </div>
        </div>
      </section>

      <section id="book">
        <Book />
      </section>
      {/* <section id="author">
        <Author />
      </section>
      <section id="reviews">
        <Reviews />
      </section> */}
    </>
  );
}

export default App;
