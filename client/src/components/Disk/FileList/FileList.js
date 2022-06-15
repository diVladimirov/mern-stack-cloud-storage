import React from "react";
import { useSelector } from "react-redux";
import File from "../File/File";

const FileList = () => {
  const files = useSelector((state) => state.file.files).map((file) => (
    <File key={file._id} file={file} />
  ));
  return (
    <div>
      File List
      <div>
        Wrapper
        <div>Name</div>
        <div>Date</div>
        <div>Size</div>
      </div>
      {files}
    </div>
  );
};

export default FileList;
