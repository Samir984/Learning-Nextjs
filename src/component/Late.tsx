import React from "react";

export default async function Late({ id }: { id: string }) {
  async function waitForWhile(time: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("\n\n\n\n\n time function running");
        resolve("done");
      }, time * 1000);
    });
  }
  console.log("\n\n\n\n\n time out running");

  await waitForWhile(2);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
