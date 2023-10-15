"use client";
import React, { useState } from "react";
import { Note } from "./Note";
import ExampleSideNavBar from "./ExampleSideNav";
import NotesGrid from "./NoteGrid";
import NoteModal from "./NoteModal";

import "flowbite";

export default function Home({}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [editingNoteContent, setEditingNoteContent] = useState<string>("");
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedColor(null);
    setEditingNoteContent("");
    setEditingNoteId(null);
  };

  return (
    <main>
      <div className="container">
        <div className="flex">
          <ExampleSideNavBar
            setNotes={setNotes}
            notes={notes}
            openModal={openModal}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <div className="flex-1">
          <NotesGrid
            notes={notes}
            selectedColor={selectedColor}
            editingNoteContent={editingNoteContent}
            setEditingNoteContent={setEditingNoteContent}
            editingNoteId={editingNoteId}
            setEditingNoteId={setEditingNoteId}
            openModal={openModal}
          />
        </div>
        {isModalOpen && (
          <NoteModal
            onClose={closeModal}
            selectedColor={selectedColor}
            setNotes={setNotes}
            notes={notes}
            editingNoteContent={editingNoteContent}
            setEditingNoteContent={setEditingNoteContent}
            editingNoteId={editingNoteId}
          />
        )}
      </div>
    </main>
  );
}
