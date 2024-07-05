"use client";

export default function ErrorPage({ error }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <p> Please try again later!</p>
    </div>
  );
}
