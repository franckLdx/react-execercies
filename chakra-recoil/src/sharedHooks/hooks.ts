import { useMemo } from "react";
import { useParams } from "react-router-dom";

export function useParamId() {
  const { id } = useParams<any>();
  return useMemo(() => {
    const num = Number(id);
    if (isNaN(num)) {
      throw new Error(`Not a valid post id`);
    }
    return num;
  }, [id]);
}