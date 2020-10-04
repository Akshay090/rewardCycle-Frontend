/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.png";
import Avatar from "../assets/tempImg/avatar.png";
import OneStar from "../assets/awards/OneStar.png";
import TwoStar from "../assets/awards/TwoStar.png";
import ThreeStar from "../assets/awards/ThreeStar.png";
import ImageCard from "../components/ImageCard";
import Header from "../components/Header";
import Axios from "axios";

const Trophys = [
  <img className="w-16 h-16 m-2" src={OneStar} alt="OneStar" />,
  <img className="w-16 h-16 m-2" src={TwoStar} alt="TwoStar" />,
  <img className="w-16 h-16 m-2" src={ThreeStar} alt="ThreeStar" />,
];

const Profile = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState();
  const userName = match.params.userName;
  let trophyIndex = useRef(0);
  console.log(userName, "ss", match);

  Axios.interceptors.request.use(
    (config) => {
      /** intercepts request and logs it into console for dev */
      console.info("✉️ ", config);
      setLoading(true);
      return config;
    },
    (error) => {
      console.error("✉️ ", error);
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const resp = await Axios.get("http://127.0.0.1:8000/u", {
          params: {
            user_name: userName,
          },
        });
        console.log(resp, "data");
        setPageData(resp.data);
        trophyIndex.current = Math.min(2, Math.round(resp.data.points / 10));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadPageData();
  }, [userName]);
  return (
    <div className="bg-gray-200 min-h-screen h-full font-sans flex flex-col items-center">
      <Header />

      <main className="w-full flex flex-col items-center">
        {loading ? (
          "Loading ...."
        ) : pageData === false || null ? (
          "Profile don't exist"
        ) : (
          <div className="max-w-5xl w-full">
            <div className="flex flex-wrap m-4">
              <img
                className="rounded-full w-24 h-24 shadow-sm object-cover inset-0"
                src={`data:image/png;base64, ${pageData.profile_pic}`}
                alt="Avatar"
              />

              <div className="max-w-xs flex flex-col mx-4 justify-center items-start">
                <span className="font-semibold text-2xl">
                  {pageData.user_name}
                </span>
                {/* <span className="">Profile Verified ✔</span> */}
                <span className="block break-words max-w-xs">
                  {pageData.description}
                </span>
              </div>

              <div className="flex items-center justify-evenly ">
                {Trophys.slice(0, trophyIndex.current).map((elem, idx) => (
                  <div key={idx}>{elem}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              {loading
                ? "LOADING..."
                : pageData.posts.length > 0
                ? pageData.posts.map((item, idx) => {
                    return (
                      <div className="w-3/5 my-2 rounded-md overflow-hidden">
                        <ImageCard
                          key={idx}
                          name={item.user_name}
                          date={new Date(item.date)}
                          image={`data:image/png;base64,${item.img}`}
                          location={item.location}
                        />
                      </div>
                    );
                  })
                : "NO DATA"}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
