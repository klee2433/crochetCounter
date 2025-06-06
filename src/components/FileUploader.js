import { useRef } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";

export const FileUploader = ({ handleFile }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <button onClick={handleClick} className="Upload-image">
        <div><MdAddPhotoAlternate /> &nbsp; Image Upload</div>
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </>
  );
};
