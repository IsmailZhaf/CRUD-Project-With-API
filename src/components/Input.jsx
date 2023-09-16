"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState();

  const handleCreateNote = async () => {
    const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ content: content, user: "ismailzhanfeari@gmail.com" }),
    });
    const data = await res.json();
    console.log(data);
    setContent("");
    router.refresh();
  };


  return (
    <div className="flex">
      <input className="bg-blur bg-" value={content} type="text" onChange={(e) => setContent(e.target.value)} />
      <button className="w-fit" onClick={handleCreateNote}>
        +
      </button>
    </div>
  );
};
