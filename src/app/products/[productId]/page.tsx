export default function Page({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h1>Products {params.productId}</h1>
    </div>
  );
}
