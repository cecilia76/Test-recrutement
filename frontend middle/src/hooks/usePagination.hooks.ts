import { useState } from "react";
import IPagination from "@/interfaces/pagination.interface";

export const usePagination = (data: IPagination) => {
  const [paginationData, setPaginationData] = useState<IPagination>(data);
  
  const onPaginationChange = (newPage: number) => {
    setPaginationData({
      ...paginationData,
      page: newPage,
    });
  }

  return [paginationData, onPaginationChange] as const;
};