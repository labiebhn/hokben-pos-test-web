import { useEffect } from "react";
import { useGetTransactionDetail } from "./services/transaction";

export const useTransactionDetail = (props: any) => {
  const { params } = props;
  const id: any = params?.id;

  const { getTransactionDetail, getTransactionDetailService } =
    useGetTransactionDetail();
  const { data, loading } = getTransactionDetail;
  const isLoading = loading === "pending";

  useEffect(() => {
    fetch();
  }, [id]);

  const fetch = () => {
    getTransactionDetailService(id);
  };

  return { data, isLoading };
};

export type UseTransactionDetail = ReturnType<typeof useTransactionDetail>;
