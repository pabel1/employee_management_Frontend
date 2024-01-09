import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { tableHeading } from "../../Components/data/data";
import { useGetAllShiftQuery } from "../../feature/Shift/shiftApiSlice";

const AllShift = () => {
  const { access_token } = useSelector((state) => state?.auth);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const queryData = {
    // searchStr,
    // name,
    // _id,
    // email,
    // phone,
    // userStatus,
    page,
    limit,
  };
  const { data, isLoading, isSuccess, isError } =
    useGetAllShiftQuery({ queryData, access_token }) || {};
  let content = null;
  if (!isLoading && isSuccess && !isError && data) {
    const { data: shifts, meta } = data || {};

    content = (
      <Table
        data={shifts}
        page={page}
        meta={meta}
        setPage={setPage}
        tableHeading={tableHeading}
      />
    );
  }
  return <div>{content}</div>;
};

export default AllShift;
