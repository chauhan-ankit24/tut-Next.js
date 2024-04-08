"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Review({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (getRandomInt(2) === 1) {
    throw new Error("Random error");
  }
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
}
