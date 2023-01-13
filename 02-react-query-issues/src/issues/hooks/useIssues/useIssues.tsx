import { getIssues } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues, {
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
  return {
    issuesQuery,
  };
};
