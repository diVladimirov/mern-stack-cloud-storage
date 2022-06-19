import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileOperations from "../redux/file/fileOperations";
import FileList from "../components/Disk/FileList/FileList";

const DiskPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  console.log(currentDir);

  useEffect(() => {
    dispatch(fileOperations.getFiles(currentDir));
  }, [currentDir, dispatch]);

  const createDirHandler = () => {
    dispatch(fileOperations.createDir(currentDir, "self"));
  };
  return (
    <div>
      Disk Page
      <div>
        Buttons<button>Back</button>
        <button onClick={createDirHandler}>Create folder</button>
      </div>
      <FileList />
    </div>
  );
};

export default DiskPage;
