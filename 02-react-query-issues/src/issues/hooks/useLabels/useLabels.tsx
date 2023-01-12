import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../../../api/gets/Labels/getLabels";

export const useLabels = () => {
  const labelsQuery = useQuery(
    ["labels"],
    getLabels,
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    }
  );
  return labelsQuery;
};
