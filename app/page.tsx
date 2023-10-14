"use client";
import { useEffect, useState } from "react";
import Link from "@/node_modules/next/link";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(value + 1);
    }, 1000);
  }, [value]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Counter</h2>
      <div id="counter" className="flex flex-row gap-3 text-4xl">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <p
          id="display"
          className="border-rounded border-solid border-2 border-black p-5"
        >
          {count}
        </p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <h2>Stopwatch</h2>
      <div id="counter" className="flex flex-row gap-3 text-4xl">
        <p
          id="display"
          className="border-rounded border-solid border-2 border-black p-5"
        >
          {value}
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/users"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Users Page{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </Link>
      </div>
    </main>
  );
}
