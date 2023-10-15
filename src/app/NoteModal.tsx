"use client";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Note } from "./Note";

interface NoteModalProps {
  onClose: () => void;
  selectedColor: string | null;
  setNotes: Dispatch<SetStateAction<Note[]>>;
  notes: Note[];
  editingNoteContent: string;
  setEditingNoteContent: (content: string) => void;
  editingNoteId: number | null;
}

function NoteModal({
  onClose,
  selectedColor,
  setNotes,
  notes,
  editingNoteContent,
  setEditingNoteContent,
  editingNoteId,
}: NoteModalProps) {
  const colorOptions = [
    {
      id: 1,
      label: "yellow",
      value: "#FFC976",
    },
    {
      id: 2,
      label: "orange",
      value: "#FE9C75",
    },
    {
      id: 3,
      label: "purple",
      value: "#B693F8",
    },
    {
      id: 4,
      label: "blue",
      value: "#03C2E6",
    },
    {
      id: 5,
      label: "green",
      value: "#C0CA7B",
    },
  ];

  const defaultSelection =
    selectedColor ||
    notes.find((note) => note.id === editingNoteId)?.color ||
    "";

  const [radioColor, setRadioColor] = useState<string | null>(defaultSelection);

  console.log("selectedColor in NoteModal:", selectedColor);
  const [content, setContent] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (editingNoteId !== null) {
      // We're in edit mode, so populate the content field
      setContent(editingNoteContent);
    } else {
      // We're in create mode
      setContent(""); // Clear the content field
    }
  }, [editingNoteId, editingNoteContent]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSave: () => void = () => {
    console.log("handleSave selectedColor (before): ", selectedColor);
    console.log("Content (before): ", content);
    console.log("editingNoteId: ", editingNoteId);

    const colorToSave = selectedColor || "";

    if (editingNoteId !== null) {
      // Editing an existing note
      // Find the note in the notes array and update it
      const updatedNotes = notes.map((note) =>
        note.id === editingNoteId
          ? { ...note, content: content, color: radioColor! }
          : note
      );

      setNotes(updatedNotes);

      // Close the modal
      onClose();
      console.log("Modal closed");

      // Clear the content input field
      setContent("");
      console.log("Is the modal closed yet?");
      setRadioColor(selectedColor || "");
    } else {
      // Creating a new note
      const newNote = {
        id: Date.now(),
        content: content,
        color: radioColor || "",
        timestamp: new Date(),
      };

      // Update the state to add the new note
      setNotes((prevNotes) => [...prevNotes, newNote]);

      console.log("handleSave selectedColor (after): ", selectedColor);
      console.log("Content (after): ", content);
      console.log("New console log before onClose");

      // Close the modal
      onClose();
      console.log("Modal closed");

      // Clear the content input field
      setContent("");
      console.log("Is the modal closed yet?");
      setRadioColor(selectedColor || "");
    }
  };

  return (
    <div
      className="hidden fixed top-0 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden w-full h-screen
                flex justify-center items-center"
      id="noteModal"
    >
      <div className="relative p-4 w-full max-w-2xl">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900">
              {editingNoteId !== null ? "Edit Note" : "Create Note"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="note"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Note
              </label>
              <textarea
                id="note"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your note..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                id="dropdownRadioButton"
                onClick={toggleDropdown}
                data-dropdown-toggle="dropdownDefaultRadio"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Color category{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
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
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownDefaultRadio"
                className={`${
                  showDropdown ? "block" : "hidden"
                } absolute mt-2 w-48 origin-top-left bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioButton"
                >
                  {colorOptions.map((colorOption) => (
                    <li key={colorOption.id}>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          type="radio"
                          value={colorOption.value}
                          name="default-radio"
                          checked={colorOption.value === radioColor}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={() => setRadioColor(colorOption.value)}
                        />
                        <label
                          htmlFor="default-radio-4"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          {colorOption.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="text-gray bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleSave}
              >
                Submit
              </button>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
