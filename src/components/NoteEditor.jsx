"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import { NoteCard } from "./NoteCard";


export const NoteEditor = ({ notesData }) => {
//   const createNote = async (url, option) => {
//     const res = await fetch(url, option);
//     const data = await res.json();
//     return data;
//   };

  return (
    <>
      <Header />
      <div className="space-y-8">
        <Input />
        <div className="space-y-4">
          {notesData.map(({ id, content }) => {
            return <NoteCard id={id} content={content} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};
