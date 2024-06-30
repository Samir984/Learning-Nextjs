import { URL } from "@/utils/utils";
import Link from "next/link";

export default async function page() {
  const res = await fetch(`${URL}/products`);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1 className="text-center text-3xl mb-6 font-bold">
        This is the Product Page
      </h1>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {data.map((product: any) => (
          <Link
            href={`/product/${product.id}`}
            className="w-[220px] h-[250px] shadow-md rounded-lg p-4 flex flex-col justify-between"
            key={product._id}
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">
                {product.productName}
              </h2>
              <p className="text-gray-600 mb-3">Stock: {product.stock}</p>
            </div>
            <p className="text-blue-600">View Product &rarr;</p>
          </Link>
        ))}
      </div>
    </>
  );
}
