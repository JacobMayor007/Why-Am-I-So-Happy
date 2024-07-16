import React from "react";

const Author = () => {
  return (
    <div className="h-auto flex items-center justify-center flex-col bg-slate-100 py-24 gap-10 xl:px-64 md:px-40 tracking-widest ">
      <div>
        <h3 className="text-3xl font-para text-center">My Story</h3>
      </div>
      <div>
        <h1 className="uppercase text-7xl font-navbar text-nowrap">
          About The Author{" "}
        </h1>
      </div>
      <div>
        <img
          className="author-image"
          src="./src/assets/banner-pic-1365x2048.png"
          alt="Author Photo"
        />
      </div>
      <div>
        <p className="author-p font-sans text-xl text-justify leading-10">
          Paula Vail RMT is a Published Award Winning Author, Radio/TV Show
          Host, Reiki Master/Teacher in Usui Reiki and the Owner/Founder of
          Wellness Inspired.com. Before she started her journey of Reiki over 14
          years ago, she owned and operated a busy & popular Italian restaurant.
          Paula has a sincere passion to serve, inspire, and support others.
          Because of this, she has become incredibly successful. She is the host
          of the show “Elevating Your life with Paula Vail”, an inspirational
          speaker, and author of the award-winning book “Why am I so Happy” by
          Paula Neva Vail. Her “Why am I so Happy” book won the Gold Medal in
          Self-Help books by the Global Book Awards Organization in 2022. She is
          also a co-author of the book “America’s Leading Ladies who positively
          Impact our World” along with Oprah Winfrey, Melinda Gates, and others.
          Paula has recently been chosen as the Executive Spotlight in the
          MARQUIS WHO’S WHO of Professional Women of Influence 2022. Paula is
          also the co-author of the book “Beyond Wellness” a Reiki training
          manual. Paula was featured in New York City Times Square by the
          Continental Who’s Who organization as a Pinnacle Professional and has
          been featured in, and on the cover of multiple magazines. This
          includes a Q & A in Publisher’s Weekly, The New York Daily, Speak
          Magazine, and two times in the “Women of Distinction Magazine” for her
          achievements in business and life. She is a featured by The National
          Digest in 2022. She has also been, and continues to be interviewed by
          amazing hosts around the country such as Jim Masters and James Miller
          to name a few. She was recently awarded “Empowered Woman of 2019” and
          “Top Female Professional of 2018” by “IOATP” The International
          Association of Top Professionals. Paula has recently been featured in
          Publisher’s Weekly, Thrive Global, America Daily Post, One World
          Herald, California Herald, CUTV News, Speak Magazine and many others.
        </p>
      </div>
    </div>
  );
};

export default Author;
