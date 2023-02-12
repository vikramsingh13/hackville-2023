import React from "react";

export default function Response({ text }) {
  return (
    <div className="bg-orange-400 m-3 p-4 rounded-3xl w-2/3 self-end">
      <p>{text}</p>
    </div>
  );
}
