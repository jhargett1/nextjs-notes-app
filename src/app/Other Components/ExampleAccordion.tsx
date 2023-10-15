"use client";

import React, { useEffect } from "react";
import "flowbite";
import { initAccordions } from "flowbite";

export default function ExampleAccordion() {
  useEffect(() => {
    initAccordions();
  }, []);
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>Why do I love Kim?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Kim is my wife, the love of my life. She is the only person in the
            entire world that puts up with me and loves me for me.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
        >
          <span>What do you find attractive about Kim?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Her sense of humor, her quirkiness. The way Kim makes me feel about
            myself just by being present and listening to me. Time just flies
            when Kim and I are just hanging out.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Kim's boobs, butt, and smile are my favorite physical qualities.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>What are some of your favorite memories with Kim?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Here's a list of some of my favorite moments with my wifey, Boothang
            Babycakes.
          </p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>First real date: Mexican and a movie</li>
            <li>First Gulf Shores vacation</li>
            <li>
              Gaming with the wifey: she's still trying to get good enough to
              beat me at baseball!
            </li>
            <li>Scary movie nights</li>
            <li>Car rides with the wife and dogs</li>
            <li>Literally just life in general....she makes me so happy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
