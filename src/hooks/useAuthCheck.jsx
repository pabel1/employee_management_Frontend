import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetLoggedInEmployeeQuery } from "../feature/Employee/EmployeeApiSlice";
import { userLoggedIn, userLoggedOut } from "../feature/auth/authSlice";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const [authToken, setAuthToken] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    console.log(localAuth);
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      setAuthToken(auth?.access_token);
    } else {
      dispatch(userLoggedOut());
      localStorage.removeItem("auth");
    }
  }, []);

  const { data, isLoading, isError, isSuccess, error } =
    useGetLoggedInEmployeeQuery(authToken, {
      skip: !authToken,
      refetchOnReconnect: true,
    }) || {};

  useEffect(() => {
    if (!isLoading && isSuccess && !isError) {
      // console.log(data?.data.result.user);
      dispatch(
        userLoggedIn({
          access_token: authToken,
          user: data?.data.result.user,
        })
      );
    }
    if (!isLoading && error) {
      dispatch(userLoggedOut());
      localStorage.removeItem("auth");
    }

    setTimeout(() => {
      if (!isLoading) {
        setAuthChecked(true);
      }
    }, 1000);
  }, [
    dispatch,
    setAuthChecked,
    authToken,
    isError,
    isSuccess,
    data?.data.result.user,
    isLoading,
    error,
  ]);
  return authChecked;
}
