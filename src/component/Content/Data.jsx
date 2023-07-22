import React from "react";
import TableComponent from "../TableComponent/TableComponent";
import style from "./Data.module.css";

const Data = () => {
  return (
    <div>
    <div className={style.displayOptions}>
      <div className={style.leftText}>Data</div>
      <div className={style.rightButtons}>
        <button className={style.button}>Table</button>
        <button className={style.button}>Details</button>
      </div>

    </div>
    <div className={style.subHeading}>
      Data is arranged in the following records
      </div>
      <TableComponent/>
    </div>
  );
};

export default Data;
