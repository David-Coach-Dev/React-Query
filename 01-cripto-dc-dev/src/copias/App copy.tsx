import { useEffect, useReducer, useState } from "react";
import "./App.css";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();
  //throw new Error("Hay un Error");
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [key, forRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
    }
  }, [error]);

  return (
    <div className="App">
      {isLoading ? <h2> Cargando...</h2> : <h2>Numero Aleatorio {number}</h2>}
      {!isLoading && error && <h2> Error: {error}</h2>}
      <button onClick={forRefetch} disabled={isLoading}>
        {isLoading ? '...' : 'Nuevo Numero'}
      </button>
    </div>
  );
};
