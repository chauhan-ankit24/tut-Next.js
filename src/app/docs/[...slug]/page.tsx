export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
    let s = params.slug.join('/');
  return <h1>Docs -- {s}</h1>;
}
