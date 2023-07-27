// ProfileContext.js
import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  const [username, setUsername] = useState("Admin"); // Set an initial value for username
  const [imageURL, setImageURL] = useState(null); // Set an initial value for imageURL

  return (
    <ProfileContext.Provider
      value={{ username, setUsername, imageURL, setImageURL }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
