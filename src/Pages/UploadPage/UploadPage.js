import React from "react";
import "./UploadPage.scss";
import { changeHandler } from "./ParsingLogic";
const UploadPage = () => {
  return (
    <div className="root__upload-page">
      <label for="inputTag" className="upload-page-file-input">
        Drag Drop a File to Upload
        <input id="inputTag" type="file" onChange={(e) => changeHandler(e)} />
      </label>

      <input
        type="text"
        placeholder="Dataset Name"
        className="upload-page-title-input"
      />
      <button className="submit-btn">Upload</button>
    </div>
  );
};

export default UploadPage;
