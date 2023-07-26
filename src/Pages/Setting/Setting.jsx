import React, { useState } from "react";
import styles from "./setting.module.css"; // Import the CSS module

export default function Setting() {
  const [imageURL, setImageURL] = useState(null);
  const [name, setName] = useState('') ;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    alert("Successfully Updated Profile");
    myFunction();
  };

  const myFunction = () => {
    setImageURL("");
    setName('')
  };

  return (
    <div className={styles["upload-container"]}>
      <h2>Setting Page</h2>

      <div className={styles["image-box"]}>
        {imageURL ? (
          <img
            src={imageURL}
            alt="Uploaded"
            className={styles["uploaded-image"]}
          />
        ) : (
          <div className={styles["placeholder-image"]}></div>
        )}
      </div>

      <label htmlFor="fileInput" className={styles["upload-button"]}>
        Upload Profile Picture
      </label>
      <input id="fileInput" type="file" onChange={handleFileChange} />
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className={styles.buttonSubmit}
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
