import React from "react";
import { Note } from "./Note";

interface TimestampButtonProps {
  onClick: (note: Note) => void;
  timestamp: Date;
  closeNoteEditModal: () => void;
  note: Note;
}

const TimestampButton: React.FC<TimestampButtonProps> = ({
  onClick,
  timestamp,
  closeNoteEditModal,
  note,
}) => {
  const timestampButtonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  };

  const timestampStyling: React.CSSProperties = {
    marginLeft: 10,
  };

  const buttonStyling: React.CSSProperties = {
    marginRight: 10,
  };

  return (
    <div style={timestampButtonContainerStyle}>
      <p style={timestampStyling}>{timestamp.toLocaleDateString()}</p>
      <button
        type="button"
        style={buttonStyling}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
        onClick={() => onClick(note)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
    </div>
  );
};

export default TimestampButton;
