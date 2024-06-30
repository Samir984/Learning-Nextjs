import { URL, fetchData } from "@/utils/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  console.log(params);
  const { title } = await fetchData(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  console.log("/n/n/n/ ", title);
  console.log(title);
  return {
    title: `product - ${title}`,
  };
}

// export async function generateStaticParams({ params }: { params: any }) {
//   const res = await fetch(`${URL}/products/`);
//   const data = await res.json();
//   return data.map((product: any) => ({
//     id: String(product.id),
//   }));
// }

export default async function page({ params }: { params: any }) {
  console.log(params.id);
  const res = await fetch(`${URL}/products/${params.id}`);
  const product = await res.json();
  console.log(product);
  return (
    <>
      <h1 className="text-center text-3xl mb-4">
        This is product {params.id} page
      </h1>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold">{product.productName}</h1>
        <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
        <p className="text-lg font-semibold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </>
  );
}
