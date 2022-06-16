import React from "react";
import dirLogo from "../../../assets/img/iconmonstr-folder-15.svg";
import fileLogo from "../../../assets/img/iconmonstr-file-2.svg";

const File = ({ file }) => {
  return (
    <div>
      <img src={file.type === "dir" ? dirLogo : fileLogo} alt="" />
      <div>{file.name}</div>
      <div>{file.date.slice(0, 10)}</div>
      <div>{file.size}</div>
    </div>
  );
};

export default File;
