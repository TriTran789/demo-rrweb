import { getRecord } from "@/api/record.api";
import React from "react";
import Player from "../components/Player";

const page = async () => {
  const record = await getRecord();
  return (
    <>
      <Player events={JSON.parse(JSON.stringify(record.data))} />
    </>
  );
};

export default page;
