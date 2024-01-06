import { apiSlice } from "../ApiSlice/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        console.log(data);
        const { bodyData } = data;
        return {
          url: `/user/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          const { accessToken: token, userData } = result?.data?.data || {};

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
              user: userData,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      invalidatesTags: ["user"],
    }),
    signUpUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;

        console.log(data);

        return {
          url: `/user/create`,
          method: "POST",
          preparedHeaders: (headers) => {
            headers.set("Content-type", "multipart/form-data");
            return headers;
          },
          body: bodyData,
          // formData: true,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          const { accessToken: token, userData } = result?.data?.data || {};

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
              user: userData,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = authApiSlice;
