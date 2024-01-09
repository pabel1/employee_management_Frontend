import { apiSlice } from "../ApiSlice/apiSlice";

export const shiftApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllShift: builder.query({
      query: (data) => {
        const { access_token, queryData } = data || {};
        const queryParams = new URLSearchParams();
        for (const key in queryData) {
          queryParams.append(key, queryData[key]);
        }
        return {
          url: `/shift/get-all?${queryParams.toString()}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["shift"],
    }),
    deleteShift: builder.mutation({
      query: (data) => {
        const { id, access_token } = data;
        return {
          url: `/shift/delete/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },

      invalidatesTags: ["shift"],
    }),
  }),
});

export const { useGetAllShiftQuery, useDeleteShiftMutation } = shiftApiSlice;
