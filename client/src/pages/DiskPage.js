import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileOperations from "../redux/file/fileOperations";
import FileList from "../components/Disk/FileList/FileList";

const DiskPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  const files = useSelector((state) => state.file.files);

  useEffect(() => {
    dispatch(fileOperations.getFiles(currentDir));
  }, [currentDir, dispatch]);
  return (
    <div>
      Disk Page
      <div>
        Buttons<button>Back</button>
        <button>Create folder</button>
      </div>
      <FileList />
    </div>
  );
};

export default DiskPage;
