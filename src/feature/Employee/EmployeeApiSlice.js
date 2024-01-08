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
    deleteEmployee: builder.mutation({
      query: (data) => {
        const { id, access_token } = data;
        return {
          url: `/user/delete-user/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },

      invalidatesTags: ["user"],
    }),
    updateEmployee: builder.mutation({
      query: (data) => {
        const { bodyData, access_token, id } = data;

        return {
          url: `/user/update-user/${id}`,
          method: "PATCH",
          preparedHeaders: (headers) => {
            headers.set("Content-type", "multipart/form-data");
            return headers;
          },
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          body: bodyData,
          // formData: true,
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
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApiSlice;
