import React from "react";

export interface Note {
  id: number;
  content: string;
  color: string;
  timestamp: Date;
  // Add any other properties you need for your notes
}

export function NoteComponent({ note }: { note: Note }) {
  const lineClampStyle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 5, // Adjust the number of lines to truncate
    WebkitBoxOrient: "vertical",
    marginLeft: 20,
    marginRight: 20,
  };

  const overflowStyle: React.CSSProperties = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
  };

  const combinedStyles: React.CSSProperties = {
    ...lineClampStyle,
    ...overflowStyle,
  };

  return (
    <div>
      <div style={combinedStyles}>{note.content}</div>
    </div>
  );
}
