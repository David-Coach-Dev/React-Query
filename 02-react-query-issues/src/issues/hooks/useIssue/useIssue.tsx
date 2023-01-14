import { useQuery } from "@tanstack/react-query";
import { getIssueInfo, getIssueComments } from "@/api";

export const useIssue = (issueNumber: number) => {
  const issueInfoQuery = useQuery(["issue", issueNumber], () =>
    getIssueInfo(issueNumber)
  );
  const issueCommentsQuery = useQuery(["issue", issueNumber, "comments"], () =>
    getIssueComments( issueInfoQuery.data!.number),
      {
        enabled: !!issueInfoQuery.data,
      },
  );
  return {
    issueInfoQuery,
    issueCommentsQuery,
  };
};
