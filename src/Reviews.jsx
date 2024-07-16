import React from "react";
import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Reviews = () => {
  return (
    <>
      <div className="review relative">
        <div className="h-full bg-[#3a4f66] opacity-40">
          <div className="">
            <svg
              className="overflow-hidden absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 20"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"
                fill="none"
                stroke="black"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <div className="video-container absolute bg-black">
          <video className="video" controls autoPlay muted loop>
            <source src="./src/assets/Wellness-Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="award review relative">
        <div className="h-full bg-[#3a4f66] -z-1 opacity-45"></div>

        <div className="award-container z-1">
          <div className="backg-video">
            <img
              className="h-72 w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Americas-Leading-Ladies-1.png"
              alt=""
            />
            <img
              className="two h-72 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Americas-leading-Ladies-2.png"
              alt=""
            />
            <img
              className="h-72 w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Elevating-Your-Life-be-featured-8.png"
              alt=""
            />

            <img
              className="h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Billboard-feature.png"
              alt=""
              srcset=""
            />
            <img
              className="four h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Whos-Who-of-Professional-Women-2022-Executive-Spotlight-2.png"
              alt=""
            />
            <img
              className="h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
              src="./src/assets/Book-postreview2023.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="review-t xl:h-[200vh]">
        <div className="h-full flex flex-col items-center justify-center gap-10 lg:py-20 xl:px-0 xl:py-12">
          <div className="z-[1]">
            <img
              className="bg-white"
              src="./src/assets/mww-logo-no-year-200px.webp"
              alt=""
            />
          </div>
          <div className="z-[1]">
            <h5 className="text-base text-white font-para">
              Paula A. Vail has been inducted into the Prestigious Marquis Who’s
              Who Biographical Registry
            </h5>
          </div>
          <div className="z-[1]">
            <h4 className="text-lg text-white font-para italic">
              Ms. Vail affects many lives through her new career path.
            </h4>
          </div>
          <div className="z-[1]">
            <p className="text-white text-xl lg:px-64 xl:px-48 2xl:px-32 sm:px-20 text-justify leading-10 tracking-widest">
              LAKEWOOD, WA, December 4, 2020 – Paula A. Vail has been inducted
              into Marquis Who’s Who. As in all Marquis Who’s Who biographical
              volumes, individuals profiled are selected on the basis of current
              reference value. Factors such as position, noteworthy
              accomplishments, visibility, and prominence in a field are all
              taken into account during the selection process. After receiving
              an Associate of Arts in accounting from Grays Harbor Community
              College, Ms. Vail went to work in the restaurant industry. She
              worked in the field for nearly three decades, beginning as a
              server, then becoming manager at Lorenzo’s Restaurant and
              eventually rising to become an owner. Following this period, Ms.
              Vail became interested in Reiki healing through a friend’s
              encouragement. She later established Wellness Inspired, where she
              currently serves as a Reiki master/teacher and owner. She is also
              the owner of Wellness Inspired Self-Publishing Company, through
              which she authored the books “Why Am I So Happy?” and co-authored
              the Reiki training manual “Beyond Wellness Usui Reiki Training
              Manual”. In addition to her work in Reiki, Ms. Vail also hosts a
              podcast and radio show, “Elevating Your Life with Paula Vail.” For
              her professional accomplishments, she received the Top Wellness
              Award and was featured in the Business Hall of Fame by the Tacoma
              Award Program for eight consecutive years. Ms. Vail is currently
              professionally active with the Best of Tacoma Society. Ms. Vail
              has attributed her professional success to her desire to help
              others. Looking toward the future, she plans to share more of her
              gift with the world.{" "}
              <span className="text-green-600"> www.wellnessinspired.com</span>
            </p>
          </div>
        </div>
      </div>

      <Carousel arrows speed={1000} dots={false} className="carousel">
        <div>
          <div className="content-carousel max-[659px]:grid-cols-1">
            <div className="py-5 message flex flex-col items-center px-5 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                {" "}
                Helpful Strategies on Achieving and Maintaining a Happy Life
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
              </p>
              <p className="text-base text-center font-para">
                I met Paula two years at our IAOTP Awards Gala in NYC in
                December 2017. I was drawn to her bubbly and charming
                personality. We have now been friends for almost two years.
              </p>
              <p className="text-[10px] mt-2 text-gray-300">October 27, 2019</p>
            </div>
            <div className="message py-5 flex flex-col items-center px-3 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                Great Read
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
              </p>
              <p className="text-base font-para text-center">
                Hi I just finished reading this amazing book. Her life lessons
                she has taught me to be happy is incorporated in my daily life.
                I have got to know Paula recently and her zest for life has made
                me truly a happier human being. Everybody must read.
              </p>
              <p className="text-[10px] text-gray-300 mt-2">
                February 17, 2023
              </p>
            </div>
            <h3 className="text-center text-lg font-para text-white">
              Randi Ward
            </h3>
            <h3 className="text-center text-lg font-para text-white">
              C Adair
            </h3>
          </div>
        </div>
        <div>
          <div className="content-carousel ">
            <div className="py-5 message flex flex-col items-center px-5 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                {" "}
                It's a very feel good book
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-4 text-[#fdd726] "
                />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
              </p>
              <p className="text-base text-center font-para max-[659px]:text-blue-800">
                I happen to know Paul and in her reading book I hear her in many
                of her writings. She is one of the Happiest Humans I know and
                I've know Paula for 20yrs and she has made me to be a happier
                person by just being around her
              </p>
              <p className="text-[10px] mt-2 text-gray-300">November 2, 2023</p>
            </div>
            <div className="message py-5 flex flex-col items-center px-3 gap-3 ">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                Happiness is a choice
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
              </p>
              <p className="text-base font-para text-center">
                I picked up this book when I was going through an incredibly
                difficult time in my life. Hopelessness had reared it's ugly
                head despite trying so hard to remain optimistic about life. I
                read this book, in a few hours highlighting quotes & journaling
                while reading it.
              </p>
              <p className="text-[10px] text-gray-300 mt-2">April 15, 2020</p>
            </div>
            <h3 className="text-center text-lg font-para text-white">
              Randi Ward
            </h3>
            <h3 className="text-center text-lg font-para text-white">
              C Adair
            </h3>
          </div>
        </div>
        <div>
          <div className="content-carousel">
            <div className="py-5 message flex flex-col items-center px-5 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                {" "}
                Helpful Strategies on Achieving and Maintaining a Happy Life
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
              </p>
              <p className="text-base text-center font-para">
                I met Paula two years at our IAOTP Awards Gala in NYC in
                December 2017. I was drawn to her bubbly and charming
                personality. We have now been friends for almost two years.
              </p>
              <p className="text-[10px] mt-2 text-gray-300">October 27, 2019</p>
            </div>
            <div className="message py-5 flex flex-col items-center px-3 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                Great Read
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
              </p>
              <p className="text-base font-para text-center">
                Hi I just finished reading this amazing book. Her life lessons
                she has taught me to be happy is incorporated in my daily life.
                I have got to know Paula recently and her zest for life has made
                me truly a happier human being. Everybody must read.
              </p>
              <p className="text-[10px] text-gray-300 mt-2">
                February 17, 2023
              </p>
            </div>
            <h3 className="text-center text-lg font-para text-white">
              Randi Ward
            </h3>
            <h3 className="text-center text-lg font-para text-white">
              C Adair
            </h3>
          </div>
        </div>
        <div>
          <div className="content-carousel">
            <div className="py-5 message flex flex-col items-center px-5 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                {" "}
                Helpful Strategies on Achieving and Maintaining a Happy Life
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#fdd726]" />
              </p>
              <p className="text-base text-center font-para">
                I met Paula two years at our IAOTP Awards Gala in NYC in
                December 2017. I was drawn to her bubbly and charming
                personality. We have now been friends for almost two years.
              </p>
              <p className="text-[10px] mt-2 text-gray-300">October 27, 2019</p>
            </div>
            <div className="message py-5 flex flex-col items-center px-3 gap-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="h-12 text-blue-200"
              />
              <p className="text-lg font-para text-center font-bold">
                Great Read
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#ffd726]" />
              </p>
              <p className="text-base font-para text-center">
                Hi I just finished reading this amazing book. Her life lessons
                she has taught me to be happy is incorporated in my daily life.
                I have got to know Paula recently and her zest for life has made
                me truly a happier human being. Everybody must read.
              </p>
              <p className="text-[10px] text-gray-300 mt-2">
                February 17, 2023
              </p>
            </div>
            <h3 className="text-center text-lg font-para text-white">
              Randi Ward
            </h3>
            <h3 className="text-center text-lg font-para text-white">
              C Adair
            </h3>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Reviews;
