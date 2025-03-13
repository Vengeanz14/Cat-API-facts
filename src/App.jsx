import { useEffect, useState } from "react";

const API_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
const API_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&json=true`;

export function App() {
  const [fact, setFact] = useState("lorem insum cat fat whatever");

  useEffect(() => {
    fetch(API_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);
  return (
    <main>
      <h1>App de gatitos</h1>
      <p1>{fact}</p1>
    </main>
  );
}
