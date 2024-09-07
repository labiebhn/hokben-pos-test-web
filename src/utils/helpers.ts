import InitialState, { ResetStatusHook } from "@/types/hooks";

export const resetStatusHook = (
  initialState: InitialState,
  state: InitialState,
  key: ResetStatusHook
) => {
  let stateNew = { ...state };
  switch (key) {
    case "loading":
      stateNew.loading = "idle";
      stateNew.message = "";
      break;
    case "data":
      stateNew.data = {};
      break;
    case "all":
      stateNew = initialState;
      break;
    default:
      break;
  }
  return stateNew;
};

export const setErrorMessage = (action: any) => {
  if (typeof action === "string") return action;
  let error = action?.paylaod || action;
  let message =
    error?.response?.data?.data?.message ??
    error?.response?.data?.meta?.message ??
    error?.response?.data?.message ??
    error?.response?.message ??
    error?.message ??
    "Server Sedang Mengalami Gangguan";

  return message;
};

export const currency = (number: any) => {
  if (number) {
    number = Math.abs(Number(number));
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    return "0";
  }
};
