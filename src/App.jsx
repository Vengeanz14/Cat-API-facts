import { useEffect, useState } from "react";
import "./App.css";

const API_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

export function App() {
  const [fact, setFact] = useState();
  const [imageURL, setImageUrl] = useState();
  const [buton, setButon] = useState(0);

  //Para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(API_ENDPOINT_RANDOM_FACT)
      .then((response) => {
        //Comprobamos que no haya un error con la respuesta
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      })
      //Hacemos un catch para saber si hay un error con la peticion
      .catch((error) => console.log(`Fecth: error::${error}`));
  }, [buton]);

  //Para recuperar la imagen cada vez que tenemos una cita nueva

  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(" ", 3).join(" ");
      console.log(firstWord);

      fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&json=true`)
        .then((response) => response.json())
        .then((res) => {
          const { url } = res;
          setImageUrl(url);
        });
    }
  }, [fact]);

  //Funcion del boton
  const handleButton = () => {
    setButon(buton + 1);
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      {imageURL && (
        <img
          className="img"
          src={imageURL}
          alt={`Image extracted using the first three words of ${fact}`}
        ></img>
      )}
      <button className="botonFact" onClick={handleButton}>
        Dame otro fact
      </button>
    </main>
  );
}
