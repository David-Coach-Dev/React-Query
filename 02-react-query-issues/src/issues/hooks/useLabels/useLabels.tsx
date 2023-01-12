import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../../../api/gets/Labels/getLabels";

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    refetchOnWindowFocus: false,
  });
  return labelsQuery;
};
