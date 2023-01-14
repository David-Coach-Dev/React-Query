import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { IssueComment, useIssue } from "@/issues";
import { LoadingIcon } from "@/shared";

export const IssueView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id = "0" } = params;
  const { issueInfoQuery, issueCommentsQuery } = useIssue(+id);
  if (issueInfoQuery.isLoading) return <LoadingIcon />;
  if (!issueInfoQuery.data) return <Navigate to="/issues/list" />;
  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>
      <IssueComment issue={issueInfoQuery.data} />
      {issueCommentsQuery.isLoading && <LoadingIcon />}
      {issueCommentsQuery.data?.map((comment) => (
        <IssueComment key={comment.id} issue={comment} />
      ))}
    </div>
  );
};
