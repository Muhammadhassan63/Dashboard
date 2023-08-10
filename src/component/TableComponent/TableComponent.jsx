import React, { useState } from "react";
import ActionIcon1 from "../../assets/action-icon1.png";
import ActionIcon2 from "../../assets/action-icon2.png";
import style from "./TableComponent.module.css";
import { adminEmail, adminPassword } from '../../credentials.js'
const Cookies = require('js-cookie');


const TableComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");



  const fetchData = (startDateValue, endDateValue) => {
    const startDateTimestamp = startDateValue ? new Date(startDateValue).getTime() : "";
    const endDateTimestamp = endDateValue ? new Date(endDateValue).getTime() : "";
    console.log(startDateTimestamp);
    console.log(endDateTimestamp);
    let apiUrl = "http://127.0.0.1:8000/generate_report/";

    if (startDateTimestamp && endDateTimestamp) {
      apiUrl += `?startDate=${startDateTimestamp}&endDate=${endDateTimestamp}`;
    }
 
    const credentials = btoa(`${adminEmail}:${adminPassword}`);

    
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`, // Add the Authorization header
        "Content-Type": "application/json"
      }
    };
        // Setting the cookies 
        Cookies.set('adminEmail', adminEmail);
        Cookies.set('adminPassword', adminPassword);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const userSummaries = data?.data?.[0]?.user_summaries || [];
        setFilteredData(userSummaries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleStartDate = (event) => {
    const startDateValue = event.target.value;
    setStartDate(startDateValue);
  };

  const handleEndDate = (event) => {
    const endDateValue = event.target.value;
    setEndDate(endDateValue);
  };

  const handleSort = () => {
    if (sortOrder === "ascending") {
      const sortedData = [...filteredData].sort(
        (a, b) => a.total_hits - b.total_hits
      );
      setFilteredData(sortedData);
      setSortOrder("descending");
    } else {
      const sortedData = [...filteredData].sort(
        (a, b) => b.total_hits - a.total_hits
      );
      setFilteredData(sortedData);
      setSortOrder("ascending");
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filteredResults = filteredData.filter((row) => {
      const userId = row.user_object_id.toLowerCase();
      return userId.includes(searchValue.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  const handleOkButtonClick = () => {
    fetchData(startDate, endDate);
  };

  return (
    <div className={style.tableContainer}>
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="search by user ID"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={style.datebox}>
        <input
          type="date"
          placeholder="start date"
          value={startDate}
          onChange={handleStartDate}
        />

        <input
          type="date"
          placeholder="end date"
          value={endDate}
          onChange={handleEndDate}
        />
      </div>

      <div className={style.sortButton}>
        <button onClick={handleOkButtonClick} className={style.resultButton}>See Result</button>
      </div>

      <div className={style.roundedTableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Total Hits</th>
              <th>Successful Hits</th>
              <th>Unsuccessful Hits</th>
              <th>Tokens</th>
              <th>Successful Tokens</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.user_object_id}</td>
                <td>{row.total_hits}</td>
                <td>{row.successful_hits}</td>
                <td>{row.unsuccessful_hits}</td>
                <td>{row.tokens}</td>
                <td>{row.tokens_successful_hits}</td>
                <td>
                  <span className={style.actionIcons}>
                    <img src={ActionIcon1} alt="" />
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
            {/* Add your sort icon here */}
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