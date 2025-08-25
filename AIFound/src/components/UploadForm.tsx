import React, { useState, forwardRef } from "react";

interface UploadFormProps {
  setResults: (r: any[]) => void;
  setImage: (img: string | null) => void;
}

const UploadForm = forwardRef<HTMLInputElement, UploadFormProps>(
  ({  setImage }, ref) => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>("Put Image");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const selected = e.target.files[0];
        setFile(selected);
        setFileName(selected.name);
        setImage(URL.createObjectURL(selected));
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!file) return;
      // TODO: API integration
    };

    return (
      <form className="upload-form" id="upload" onSubmit={handleSubmit}>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
          ref={ref}
          style={{ display: "none" }}
        />
        <label htmlFor="file-upload" className="btn-secondary-outline">
          {file ? fileName : "Put Image"}
        </label>
        {file && <button type="submit"  className="btn-primary"><a href="#results">Run</a></button>}
      </form>
    );
  }
);

export default UploadForm;
