"use client";
import React, { useState } from "react";
import { NoteComponent, Note } from "./Note";
import TimestampButton from "./TimeStampButton";
import HeaderNav from "./HeaderNav";

interface NotesGridProps {
  notes: Note[];
  selectedColor: string | null;
  editingNoteContent: string;
  setEditingNoteContent: (content: string) => void;
  editingNoteId: number | null;
  setEditingNoteId: (id: number | null) => void;
  openModal: () => void;
}

function NotesGrid({
  notes,
  selectedColor,
  editingNoteContent,
  setEditingNoteContent,
  editingNoteId,
  setEditingNoteId,
  openModal,
}: NotesGridProps) {
  const [isEditingNote, setIsEditingNote] = useState(false);
  console.log("Received notes:", notes);

  const openNoteEditModal = (note: Note) => {
    setEditingNoteContent(note.content);
    setEditingNoteId(note.id);
    setIsEditingNote(true);
    openModal();
  };

  const openNewNoteModal = () => {
    setEditingNoteContent("");
    setEditingNoteId(null);
    setIsEditingNote(true);
  };

  const closeNoteEditModal = () => {
    setEditingNoteContent("");
    setEditingNoteId(null);
    setIsEditingNote(false);
  };

  return (
    <div>
      <HeaderNav />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id}>
            <div
              style={{
                backgroundColor: note.color,
                height: 400,
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="h-auto max-w-full rounded-lg"
            >
              <NoteComponent note={note} />
              <TimestampButton
                onClick={openNoteEditModal}
                timestamp={note.timestamp}
                closeNoteEditModal={closeNoteEditModal}
                note={note}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesGrid;
