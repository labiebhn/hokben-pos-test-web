import axios from "axios";
import ENDPOINTS from "../constants/endpoints";

export const getTransaction = () => {
  return axios.get(ENDPOINTS.TRANSACTION.GET);
};

export const getTransactionSummary = () => {
  return axios.get(ENDPOINTS.TRANSACTION.GET_SUMMARY);
};

export const getTransactionDetail = (id: any) => {
  return axios.get(ENDPOINTS.TRANSACTION.GET_DETAIL.replace(":id", id));
};
