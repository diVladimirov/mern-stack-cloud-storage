import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileOperations from "../redux/file/fileOperations";

const DiskPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  const files = useSelector((state) => state.file.files);
  console.log(files);

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
    </div>
  );
};

export default DiskPage;
