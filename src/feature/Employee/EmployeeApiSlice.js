import { apiSlice } from "../ApiSlice/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const employeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployee: builder.query({
      query: (data) => {
        const { access_token, queryData } = data || {};
        const queryParams = new URLSearchParams();
        for (const key in queryData) {
          queryParams.append(key, queryData[key]);
        }
        return {
          url: `/user/get-all-user?${queryParams.toString()}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["user"],
    }),
    getLoggedInEmployee: builder.query({
      query: (access_token) => {
        console.log(access_token);

        return {
          url: `/user/logged-in-user`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { user } = result?.data?.data?.result || {};

          dispatch(
            userLoggedIn({
              user: user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/api/users`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },

      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/api/users/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },

      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/api/users/${id}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: data,
        };
      },

      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllEmployeeQuery,
  useGetLoggedInEmployeeQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = employeeApiSlice;
