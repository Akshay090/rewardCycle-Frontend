/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import ImageCard from "../components/ImageCard";
import Header from "../components/Header";
import PageBtn from "../components/PageBtn";
import Axios from "axios";

const Home = () => {
  const [pageCount, setPageCout] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    console.log(pageCount);

    const loadPageData = async () => {
      try {
        const resp = await Axios.get("http://127.0.0.1:8000/", {
          params: {
            skip: pageCount,
          },
        });
        console.log(resp, "data");
        setPageData(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadPageData();
  }, [pageCount]);

  return (
    <div className="bg-gray-200 min-h-screen h-full font-sans flex flex-col items-center">
      <Header />

      <main className="w-full flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <div className="mt-8 flex flex-wrap mx-2 my-2 overflow-hidden sm:mx-1 md:mx-1 lg:mx-1 xl:mx-1">
            {loading
              ? "LOADING..."
              : pageData.length > 0
              ? pageData.map((item, idx) => {
                  return (
                    <ImageCard
                      key={idx}
                      name={item.user_name}
                      date={item.date}
                      image={`data:image/png;base64,${item.img}`}
                      location={item.location}
                    />
                  );
                })
              : "NO DATA"}
          </div>
          <div className="my-6 flex justify-center items-center">
            {pageCount < 10 ? null : (
              <PageBtn
                clickFxn={() => setPageCout((pageCount) => pageCount - 10)}
                text={"« Prev"}
              />
            )}

            {pageCount >= 10 && `Pg - ${pageCount / 10 + 1}`}
            <PageBtn
              clickFxn={() => setPageCout((pageCount) => pageCount + 10)}
              text={"Next »"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
