import { useServices } from ".";
import { TRANSACTION } from "../../services";

export const useGetTransactionSummary = () => {
  const { state, service, reset } = useServices(
    TRANSACTION.getTransactionSummary as any
  );
  return {
    getTransactionSummary: state,
    getTransactionSummaryService: () => service(),
    getTransactionSummaryReset: reset,
  };
};

export const useGetTransaction = () => {
  const { state, service, reset } = useServices(
    TRANSACTION.getTransaction as any
  );
  return {
    getTransaction: state,
    getTransactionService: () => service(),
    getTransactionReset: reset,
  };
};

export const useGetTransactionDetail = () => {
  const { state, service, reset } = useServices(
    TRANSACTION.getTransactionDetail as any
  );
  return {
    getTransactionDetail: state,
    getTransactionDetailService: (id: any) => service(id),
    getTransactionDetailReset: reset,
  };
};
