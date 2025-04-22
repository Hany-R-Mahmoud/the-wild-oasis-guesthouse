import { useQuery } from "@tanstack/react-query";

export function useReadSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getCabins,
  });

  return { isLoading, settings, error };
}
