/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Logo from "../assets/logo.png";
import Avatar from "../assets/tempImg/avatar.png";
import OneStar from "../assets/awards/OneStar.png";
import TwoStar from "../assets/awards/TwoStar.png";
import ThreeStar from "../assets/awards/ThreeStar.png";
import ImageCard from "../components/ImageCard";
import Header from "../components/Header";

const tempArray = Array(5).fill(1);

const Profile = () => {
  return (
    <div className="bg-gray-200 min-h-screen h-full font-sans flex flex-col items-center">
      <Header/>

      <main className="w-full flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <div className="flex flex-wrap m-4">
            <img
              className="rounded-full w-24 shadow-sm"
              src={Avatar}
              alt="Avatar"
            />

            <div className="max-w-xs flex flex-col mx-4 justify-center items-start">
              <span className="font-semibold text-2xl">John Doe</span>
              <span className="">Profile Verified ✔</span>
              <span className="">A small description of random Person</span>
            </div>

            <div className="flex items-center justify-evenly ">
              <img className="w-16 h-16 m-2" src={OneStar} alt="OneStar" />
              <img className="w-16 h-16 m-2" src={TwoStar} alt="TwoStar" />
              <img className="w-16 h-16 m-2" src={ThreeStar} alt="ThreeStar" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap mx-2 my-2 overflow-hidden sm:mx-1 md:mx-1 lg:mx-1 xl:mx-1">
            {tempArray.map((item, idx) => {
              return (
                <ImageCard
                  key={idx}
                  name="John Doe"
                  date="28-1-20"
                  image="https://source.unsplash.com/random/600x400"
                  location="Vadodara"
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
