import { githubApi } from "@/api";
import { sleep } from "@/helpers";
import { Issue } from "@/issues";

export const getIssues = async (): Promise<Issue[]> => {
  await sleep(2);
  //Usando Fetch
  //const res = await fetch("https://api.github.com/repos/facebook/react/issues");
  //const data = await res.json();
  //Usando Axios
  const { data } = await githubApi.get<Issue[]>('/issues', {
    headers: {
      Authorization: null
    }
  });
  console.log(data);
  return data;
};