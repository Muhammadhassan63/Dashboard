// api.js
const axios = require('axios');

const convertToTimestamp = (dateString) => {
  const dateObject = new Date(dateString);
  return Math.floor(dateObject.getTime() / 1000); // Convert milliseconds to seconds
};

const generateReport = async (startDate, endDate) => {
  const startTimestamp = convertToTimestamp(startDate.toString());
  const endTimestamp = convertToTimestamp(endDate.toString());

  const url = `http://127.0.0.1:8000/generate_report/?startDate=${startTimestamp}&endDate=${endTimestamp}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default generateReport;
