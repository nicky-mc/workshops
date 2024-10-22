"use client";

import Image from "next/image";

export default function ErrorClient({ error, reset }) {
  const imageSrc = "/itbroke.jpeg"; // Replace with your own image

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="mb-8">
        <div className="relative w-64 h-64">
          <Image
            src={imageSrc}
            alt="Error Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </header>
      <main className="text-center">
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        <p className="mt-4 text-lg">{error?.message || "An error occurred."}</p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
        >
          Try again
        </button>
      </main>
    </div>
  );
}
