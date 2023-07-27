import React from 'react';
import styles from './details.module.css';

export default function Details() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Overview:</h1>
      <p className={styles.overviewText}>FullFr is a comprehensive reporting software designed to simplify the process of generating detailed and visually appealing reports for various types of data analysis. Whether you are an individual, a small business, or a large enterprise, FullFr offers a user-friendly and efficient solution for deducing (extracting) relevant information from different sources and presenting it in a clear, structured, and customizable format.</p>

      <div className={styles.container}>
        <h2 className={styles.heading}>Key Features:</h2>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Data Source Integration:</h3>
          <p>FullFr allows users to connect to various data sources, including databases, spreadsheets, cloud storage, web services, and APIs. It supports a wide range of formats such as CSV, Excel, SQL, and JSON, ensuring compatibility with diverse data sets.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Report Builder:</h3>
          <p>The software provides a powerful report builder interface that enables users to drag and drop elements to design custom reports. Users can add tables, charts, graphs, images, and text boxes, arranging them intuitively to create visually engaging and informative reports.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Data Deduction (Extraction):</h3>
          <p>FullFr's standout feature is its intelligent data deduction capability. Through advanced algorithms and user-defined rules, FullFr can automatically extract specific data points from the connected sources, saving significant time and effort in manual data entry.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Report Templates:</h3>
          <p>To expedite the reporting process, FullFr comes with a collection of pre-designed report templates suitable for different business needs. Users can customize these templates or create their own to maintain a consistent look and feel across all reports.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Data Transformation:</h3>
          <p>The software allows users to perform data transformations on the extracted information. Users can apply filters, calculations, and aggregations to the data, enabling them to gain deeper insights and visualize trends effectively.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Interactive Dashboards:</h3>
          <p>FullFr offers interactive dashboards where users can combine multiple reports and visualizations to create comprehensive and interactive data presentations. Dashboards can be shared with stakeholders for real-time collaboration and decision-making.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Export and Sharing Options:</h3>
          <p>FullFr provides several export options to share reports with others. Users can export reports as PDF, Excel, or HTML files, and also generate shareable links for easy online access.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Data Security and Privacy:</h3>
          <p>FullFr ensures data security and privacy by implementing robust encryption and access control measures. User authentication and authorization protocols are enforced to safeguard sensitive information.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Scheduled Reports:</h3>
          <p>Users can schedule automated report generation and distribution based on predefined intervals or specific events. This feature is especially useful for delivering regular updates to clients, management, or team members.</p>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.subHeading}>Multi-Platform Support:</h3>
          <p>FullFr is compatible with various operating systems, including Windows, macOS, and Linux, providing flexibility in its deployment across different environments.</p>
        </div>
      </div>
    </div>
  );
}
