import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();
  //throw new Error("Hay un Error");
  return +numberString;
};

export const useRandom = () => {
  const query = useQuery(["randomNumber"], getRandomNumberFromApi);

  return query;
}