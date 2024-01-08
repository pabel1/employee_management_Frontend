import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "../../Utility/isTokenExpired";
import { useRefreshTokenMutation } from "../feature/auth/authApiSlice";
import { userLoggedOut } from "../feature/auth/authSlice";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const { access_token } = useSelector((state) => state.auth);
  const [refreshToken] = useRefreshTokenMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const authCheck = async () => {
      if (access_token) {
        try {
          const isAccessTokenExpired = isTokenExpired(access_token);

          if (isAccessTokenExpired) {
            const newAccessToken = await refreshToken();

            console.log(newAccessToken);
            if (newAccessToken?.error) {
              dispatch(userLoggedOut());
              localStorage.removeItem("auth");
              setAuthChecked(false);
              return;
            }

            if (newAccessToken?.data?.data?.accessToken) {
              // Update the access token and store it in memory or state
              setAuthToken(newAccessToken?.data?.data?.accessToken);

              // Update your local storage or state with the new token
              localStorage.setItem(
                "auth",
                JSON.stringify({
                  access_token: newAccessToken?.data?.data?.accessToken,
                  user: newAccessToken?.data?.data?.user,
                })
              );

              setAuthChecked(true);
              return;
            }
          }

          setAuthToken(access_token);
          setAuthChecked(true);
        } catch (error) {
          dispatch(userLoggedOut());
          localStorage.removeItem("auth");
          setAuthChecked(true);
        }
      } else {
        dispatch(userLoggedOut());
        localStorage.removeItem("auth");
        setAuthChecked(true);
      }
    };
    authCheck();
  }, [
    dispatch,
    setAuthChecked,
    setAuthToken,
    authToken,
    authChecked,
    access_token,
    refreshToken,
  ]);

  return authChecked;
}
