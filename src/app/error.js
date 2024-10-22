"use client";

export default function GlobalError({ error }) {
  return (
    <>
      <h1>Error occurred</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
    </>
  );
}
