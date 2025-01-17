import Axios, { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { AuthContext } from "@/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export const useAxios = () => {
  const { clearAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const axios = Axios.create({
    baseURL: __BACKEND_URL__,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axios.interceptors.response.use(
    (response) => response,
    (err: AxiosError & { response: { data: { message?: string } } }) => {
      if (Axios.isCancel(err)) {
        console.error("Request canceled", err.message);
      }
      const msg = err?.response?.data?.message;
      const code = err?.response?.status;
      if (code === 401) {
        if (clearAuth) {
          clearAuth();
          navigate(`${__BASE_URL__}/login`);
        }
        enqueueSnackbar(`Login Expired`, {
          variant: "info",
        });
      } else if (code === 403) {
        enqueueSnackbar(`Request Error: Blame Dev :| ${msg}`, {});
        navigate(`${__BASE_URL__}/login`);
      } else if (msg) {
        enqueueSnackbar(msg, { variant: "error" });
      }

      return Promise.reject(err);
    }
  );
  const axiosErrHandler = (_: AxiosError | any) => {};
  return { axios, axiosErrHandler };
};
export default useAxios;
