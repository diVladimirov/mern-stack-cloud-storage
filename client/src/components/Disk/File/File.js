import React from "react";

const File = ({ file }) => {
  return (
    <div>
      File
      {/* <img src="" alt /> */}
      <div>{file.name}</div>
      <div>{file.date}</div>
      <div>{file.size}</div>
    </div>
  );
};

export default File;
