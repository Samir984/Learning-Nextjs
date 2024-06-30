export const URL = "http://localhost:3200/api/v1";

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function fetchData(url: string) {
  const res = await fetch(url);
  await wait(2000);
  return res.json();
}
