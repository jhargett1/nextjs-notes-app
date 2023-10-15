"use client";

import React, { useState } from "react";

export default function ExampleCard() {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/400");
  const [isBlurred, setIsBlurred] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);

  const changeImage = () => {
    const timeStamp = Date.now();
    setImageUrl(`https://picsum.photos/400?${timeStamp}`);
  };

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
    if (isBlurred) {
      setImageUrl((prevImageUrl) => {
        const newImageUrl = new URL(prevImageUrl);
        newImageUrl.searchParams.set("blur", String(isBlurred));
        return newImageUrl.toString();
      });
    } else {
      setImageUrl((prevImageUrl) => {
        const newImageUrl = new URL(prevImageUrl);
        newImageUrl.searchParams.delete("blur");
        return newImageUrl.toString();
      });
    }
  };

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    if (isGrayscale) {
      setImageUrl((prevImageUrl) => {
        const newImageUrl = new URL(prevImageUrl);
        newImageUrl.searchParams.set("grayscale", String(isGrayscale));
        return newImageUrl.toString();
      });
    } else {
      setImageUrl((prevImageUrl) => {
        const newImageUrl = new URL(prevImageUrl);
        newImageUrl.searchParams.delete("grayscale");
        return newImageUrl.toString();
      });
    }
  };

  const handleUpdateImageClick = (e) => {
    e.preventDefault();
    changeImage();
  };

  return (
    <div className="container">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            onClick={handleUpdateImageClick}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Image
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <br />
      <div>
        <button
          type="button"
          className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
            isBlurred ? "bg-blue-400" : ""
          }`}
          onClick={toggleBlur}
        >
          Toggle Blur
        </button>
        <button
          type="button"
          className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
            isGrayscale ? "bg-blue-400" : ""
          }`}
          onClick={toggleGrayscale}
        >
          Toggle Grayscale
        </button>
      </div>
    </div>
  );
}
