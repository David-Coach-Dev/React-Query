import { sleep } from "../../../helpers";
import { Labels } from "../../../issues";
import { githubApi } from "../../base";

export const getLabels = async (): Promise<Labels[]> => {
  await sleep(2);
  //Usando Fetch
  //const res = await fetch("https://api.github.com/repos/facebook/react/labels");
  //const data = await res.json();
  //Usando Axios
  const { data } = await githubApi.get<Labels[]>('/labels');
  console.log(data);
  return data;
};