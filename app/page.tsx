"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex gap-5 items-center justify-center h-[70vh]">
      <button className="bg-gray-900 rounded-lg w-40 h-16 text-white text-xl" onClick={() => setCounter(counter + 1)}>Plus</button>
      <h1 className="text-2xl font-semibold">{counter}</h1>
      <button className="bg-gray-900 rounded-lg w-40 h-16 text-white text-xl" onClick={() => setCounter(counter - 1)} disabled={counter === 0 }>Minus</button>
    </div>
  );
}
