Admin Dashboard README:

# Admin Dashboard


<img width="957" alt="image" src="https://github.com/Muhammadhassan63/Dashboard/assets/80644042/4169c18f-deba-4fac-94c3-1c17ce2c3db0">
<img width="161" alt="image" src="https://github.com/Muhammadhassan63/Dashboard/assets/80644042/61f783f6-eff7-486c-97d1-4f0e571d0e12">

The Admin Dashboard is a web-based application designed to provide administrators with a powerful and user-friendly interface for managing various aspects of the system. This dashboard is built based on the design provided in Figma, ensuring a consistent and visually appealing user experience.

## Features

- **Tabular Data Display:** The main feature of this Admin Dashboard is the display of tabular data with columns such as "Email Address," "Report Failed," "Report Generated," "Total Cost," and "Actions." The data is presented in a clean and organized format, allowing administrators to quickly access and manage information.

- **Sortable Data:** Administrators can sort the data in ascending or descending order based on the "Total Cost" field by simply clicking the "Sort" button. This feature enables easy analysis and helps administrators identify patterns in the data.

- **Filterable Data:** The dashboard provides a filter option that allows administrators to enter a specific value for the "email" field and filter the data dynamically. 
- **Action Icons:** The action icon download the specific data.
- 
- **JWT Token Authentication:** The Admin Dashboard uses JWT (JSON Web Token) authentication for enhanced security. After logging in, users receive a JWT token that is stored in their browser's local storage. This token remains valid for 1 hour. If the user revisits the site within this period, they are automatically logged in without the need to re-enter credentials. This approach ensures a secure and seamless login experience, reducing the risk of unauthorized access.

- **Change profile pic and username:** Through the Setting page users can change their profile picture and username. 
  

- 

## Getting Started

1. **Installation:** Clone this repository to your local machine and run `npm install` to install the required dependencies.

2. **Run the Application:** After installation, use the command `npm start` to start the development server. The Admin Dashboard will be accessible at `http://localhost:3000`.

3. **Data Customization:** To customize the data displayed in the table, modify the `data` array in the `TableComponent.js` file. You can add, update, or remove rows as needed.

## Technologies Used

- **React:** The Admin Dashboard is built using the React JavaScript library, which allows for the creation of reusable and interactive UI components.

- **CSS Modules:** CSS Modules are utilized to style the components in a modular and isolated manner, avoiding potential style conflicts.

- **Figma:** The design for this Admin Dashboard was created in Figma, providing a comprehensive visual guide for the project's layout and styling.

## Customization

This Admin Dashboard is fully customizable to suit your specific needs. You can modify the layout, colors, and components to match your branding and application requirements.

## Contribution

If you find any issues or have suggestions for improvement, feel free to submit a pull request or open an issue. Contributions from the community are highly appreciated!



## Credits

- The design for this Admin Dashboard can be accessed [here](https://www.figma.com/file/2aMWf8fopI7fXklP4J7jH2/Untitled?node-id=12%3A684&mode=dev).


