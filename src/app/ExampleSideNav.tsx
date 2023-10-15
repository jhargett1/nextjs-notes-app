"use client";
import React, { useState } from "react";
import { Note } from "./Note";

interface Color {
  name: string;
  hashcode: string;
}

interface ExampleSideNavBarProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  openModal: () => void;
  notes: Note[];
  selectedColor: string | null; // Include the 'selectedColor' prop here
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>; // Include the 'setSelectedColor' prop here
}

export default function ExampleSideNavBar({
  setNotes,
  openModal,
  notes,
  selectedColor,
  setSelectedColor,
}: ExampleSideNavBarProps): JSX.Element {
  const [isMenuExpanded, setMenuExpanded] = useState(false);

  const colors: Color[] = [
    {
      name: "yellow",
      hashcode: "#FFC976",
    },
    {
      name: "orange",
      hashcode: "#FE9C75",
    },
    {
      name: "purple",
      hashcode: "#B693F8",
    },
    {
      name: "blue",
      hashcode: "#03C2E6",
    },
    {
      name: "green",
      hashcode: "#C0CA7B",
    },
  ];

  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuExpanded(!isMenuExpanded);
    e.preventDefault();
  };

  const addNote = (color: string) => {
    const newNote = {
      id: Date.now(),
      content: "",
      color,
      timestamp: new Date(),
    };

    // Update parent state
    console.log("Before adding note:", notes);
    setNotes((prevNotes) => [...prevNotes, newNote]);
    console.log("After adding note:", notes);
    console.log("New note from Color Click: ", newNote);
  };

  const handleColorClick = (color: Color) => {
    setSelectedColor(color.hashcode);
    console.log("handleColorClick selectedColor: ", color.name);
    openModal();
  };

  return (
    <div
      className="flex h-screen w-16 flex-col justify-between border-e bg-white"
      style={{ margin: 10 }}
    >
      <div
        className="inline-flex h-16 w-16 items-center justify-center"
        style={{ marginBottom: 20 }}
      >
        <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>
      </div>

      <div className="inline-flex h-16 w-16 items-center justify-center">
        <a
          href=""
          className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-[35px] h-[35px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
          </svg>
        </a>
      </div>

      <div
        className={`border-t border-gray-100 transition-all duration-300 ${
          isMenuExpanded ? "h-auto" : "h-0"
        } overflow-hidden`}
      >
        <div className="px-2">
          <div className="py-4">
            <ul className="space-y-1 border-t border-gray-100 pt-4">
              {colors.map((color, index) => (
                <li key={index}>
                  <a
                    href="javascript:void(0)"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    onClick={() => handleColorClick(color)}
                  >
                    <div
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-600"
                      style={{
                        backgroundColor: color.hashcode,
                        margin: "5px 0",
                      }}
                    />

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Add a(n) {color.name} note.
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
