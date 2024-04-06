"use client";

export default function Error({ error }: { error: Error }) {
return (
    <div style={{  border: "2px solid black" }}>
        <h1>{error.message}</h1>
    </div>
);
}
