import { useEffect } from "react";
import {
  useGetTransaction,
  useGetTransactionSummary,
} from "./services/transaction";

export const useDashboard = (props: any) => {
  const { getTransactionSummary, getTransactionSummaryService } =
    useGetTransactionSummary();
  const { data: summary } = getTransactionSummary;
  const isLoading = getTransactionSummary.loading === "pending";

  const { getTransaction, getTransactionService } = useGetTransaction();
  const { data: list } = getTransaction;
  const isListLoading = getTransaction.loading === "pending";

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getTransactionSummaryService();
    getTransactionService();
  };

  return { summary, list, isLoading, isListLoading };
};

export type UseDashboard = ReturnType<typeof useDashboard>;
