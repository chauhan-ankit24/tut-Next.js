"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h5>{error.message}</h5>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
