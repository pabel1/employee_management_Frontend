import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { myShiftTableHeading } from "../../Components/data/data";
import { useMyShiftQuery } from "../../feature/AssignShift/assignShiftApiSlice";

const MyShift = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { access_token } = useSelector((state) => state?.auth);
  const { data, isLoading, isSuccess } =
    useMyShiftQuery({ access_token }) || {};

  let content = null;
  if (!isLoading && isSuccess && data) {
    content = (
      <Table
        data={data?.data?.result}
        page={page}
        // meta={meta}
        setPage={setPage}
        tableHeading={myShiftTableHeading}
      />
    );
  }
  return (
    <div>
      <div className=" my-10">
        <h1 className=" text-2xl">My Shift</h1>
      </div>
      {content}
    </div>
  );
};

export default MyShift;
