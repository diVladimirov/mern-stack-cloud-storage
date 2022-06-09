import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileOperations from "../redux/file/fileOperations";

const DiskPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.cuurentDir);

  useEffect(() => {
    dispatch(fileOperations.getFiles(currentDir));
  }, [currentDir, dispatch]);
  return <div>Disk Page</div>;
};

export default DiskPage;
