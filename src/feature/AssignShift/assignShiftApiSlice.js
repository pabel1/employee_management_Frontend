import { apiSlice } from "../ApiSlice/apiSlice";

export const assignShiftApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignShiftDetails: builder.query({
      query: (data) => {
        const { access_token, shiftID } = data || {};

        return {
          url: `assign-shift/shift-assign-details/${shiftID}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["assignShift"],
    }),
    createAssignShift: builder.mutation({
      query: (data) => {
        const { access_token, bodyData } = data || {};

        return {
          url: `assign-shift/create`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      invalidatesTags: ["assignShift"],
    }),
    removeAssignShift: builder.mutation({
      query: (data) => {
        const { access_token, id } = data || {};

        return {
          url: `assign-shift/remove-assign-shift/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["assignShift"],
    }),
  }),
});

export const {
  useGetAssignShiftDetailsQuery,
  useCreateAssignShiftMutation,
  useRemoveAssignShiftMutation,
} = assignShiftApiSlice;
