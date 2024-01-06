import { apiSlice } from "../ApiSlice/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (data) => {
        const { page } = data;
        return {
          url: `/api/users?page=${page || 1}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
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
  useGetAllUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApiSlice;
