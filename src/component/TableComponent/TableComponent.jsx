import React, { useState } from "react";
import ActionIcon1 from "../../assets/action-icon1.png";
import ActionIcon2 from "../../assets/action-icon2.png";
import detailsPDF from "../../details.pdf"; // Replace with the actual path to your PDF file
import style from "./TableComponent.module.css";

const data = [
  {
    "Email Address": "john.doe@gmail.com",
    "Report Failed": 22,
    "Report Generated": 24,
    "Total Cost": 320,
  },
  {
    "Email Address": "hassan@gmail.com",
    "Report Failed": 15,
    "Report Generated": 30,
    "Total Cost": 410,
  },
  {
    "Email Address": "bob.johnson@gmail.com",
    "Report Failed": 8,
    "Report Generated": 40,
    "Total Cost": 275,
  },
  {
    "Email Address": "bob.will@gmail.com",
    "Report Failed": 8,
    "Report Generated": 40,
    "Total Cost": 275,
  },
  {
    "Email Address": "william.1@gmail.com",
    "Report Failed": 18,
    "Report Generated": 40,
    "Total Cost": 205,
  },
  // Add more data rows as needed
];

const TableComponent = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");



  const handleSort = () => {
    if (sortOrder === "ascending") {
      const sortedData = [...filteredData].sort(
        (a, b) => a["Total Cost"] - b["Total Cost"]
      );
      setFilteredData(sortedData);
      setSortOrder("descending");
    } else {
      const sortedData = [...filteredData].sort(
        (a, b) => b["Total Cost"] - a["Total Cost"]
      );
      setFilteredData(sortedData);
      setSortOrder("ascending");
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filteredResults = data.filter((row) => {
      const email = row["Email Address"].toLowerCase();
      return email.includes(searchValue.toLowerCase());
    });
    setFilteredData(filteredResults);
  };



  const handleDownloadPdf = () => {
    // The name of the PDF file you want to download
    const pdfFileName = "details.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = detailsPDF; 
    link.target = "_blank"; 
    link.download = "details.pdf"; 

    link.click();
  };

  return (
    <div className={style.tableContainer}>
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="search by email"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={style.roundedTableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Email Address</th>
              <th>Report Failed</th>
              <th>Report Generated</th>
              <th>Total Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>
                  
                  {row["Email Address"]}
                </td>
                <td className={style.reportFail}>{row["Report Failed"]}</td>
                <td className={style.reportGenerated}>
                  {row["Report Generated"]}
                </td>
                <td>${row["Total Cost"]}</td>
                <td>
                  <span className={style.actionIcons}>
                  <img src={ActionIcon1} alt="" onClick={handleDownloadPdf} />
                  </span>
                  <span className={style.actionIcons}>
                    <img src={ActionIcon2} alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={style.buttonContainer}>
        <div>
          <button className={style.filterButton} onClick={handleSort}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9 10.6667C9.13261 10.6667 9.25979 10.7193 9.35355 10.8131C9.44732 10.9069 9.5 11.0341 9.5 11.1667C9.5 11.2993 9.44732 11.4265 9.35355 11.5202C9.25979 11.614 9.13261 11.6667 9 11.6667H7C6.86739 11.6667 6.74022 11.614 6.64645 11.5202C6.55268 11.4265 6.5 11.2993 6.5 11.1667C6.5 11.0341 6.55268 10.9069 6.64645 10.8131C6.74022 10.7193 6.86739 10.6667 7 10.6667H9ZM11 7.33333C11.1326 7.33333 11.2598 7.38601 11.3536 7.47978C11.4473 7.57355 11.5 7.70073 11.5 7.83333C11.5 7.96594 11.4473 8.09312 11.3536 8.18689C11.2598 8.28065 11.1326 8.33333 11 8.33333H5C4.86739 8.33333 4.74021 8.28065 4.64645 8.18689C4.55268 8.09312 4.5 7.96594 4.5 7.83333C4.5 7.70073 4.55268 7.57355 4.64645 7.47978C4.74021 7.38601 4.86739 7.33333 5 7.33333H11ZM13 4C13.1326 4 13.2598 4.05268 13.3536 4.14645C13.4473 4.24021 13.5 4.36739 13.5 4.5C13.5 4.63261 13.4473 4.75979 13.3536 4.85355C13.2598 4.94732 13.1326 5 13 5H3C2.86739 5 2.74021 4.94732 2.64645 4.85355C2.55268 4.75979 2.5 4.63261 2.5 4.5C2.5 4.36739 2.55268 4.24021 2.64645 4.14645C2.74021 4.05268 2.86739 4 3 4H13Z"
                fill="#FF6A00"
              />
            </svg>
            Filter
          </button>
        </div>
        <div>
          <button className={style.pageButton}> Page 1 of 2 </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
