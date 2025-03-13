async function getData(url: string): Promise<string> {
  const response = await fetch(url);
  const data: string = await response.json();
  return data;
}
