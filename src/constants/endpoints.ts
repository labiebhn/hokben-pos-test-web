import CONFIGS from "@/configs";

const ENDPOINTS = {
  TRANSACTION: {
    GET: `${CONFIGS.BASE_URL}/v1/transaction`,
    GET_SUMMARY: `${CONFIGS.BASE_URL}/v1/transaction/summary`,
    GET_DETAIL: `${CONFIGS.BASE_URL}/v1/transaction/:id`,
  },
};

export default ENDPOINTS;
