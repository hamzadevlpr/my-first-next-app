export default function page({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <div>
        <h1 className="text-3xl font-bold">
          View Docs for  {params.slug[0]} and concept of{" "}
          {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug.length === 1) {
    return (
      <div>
        <h1 className="text-6xl font-bold">Docs {params.slug[0]}</h1>
      </div>
    );
  }
}
