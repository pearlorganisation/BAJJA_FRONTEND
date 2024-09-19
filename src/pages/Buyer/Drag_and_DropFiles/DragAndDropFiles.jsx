import React, { useState } from 'react';

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const handleFiles = (newFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        handleFiles(droppedFiles);
    };

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };
    const handleImageCancel = (file) => {
        const newArrayFile = files.filter((item) => item.lastModified != file.lastModified);
        setFiles(newArrayFile);
    }
    return (
        <div className="mx-auto mt-10">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFiles(e.target.files)}
                />
                <div
                    id="dropZone"
                    className="cursor-pointer p-4 w-full h-40 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                    onClick={handleClick}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                >
                    <p className="text-gray-500">
                        Drag & drop images here or{' '}
                        <span className="text-blue-500">click to select</span>
                    </p>
                </div>
                <div id="fileList" className="mt-4 flex flex-wrap justify-start w-full gap-5">
                    {files.map((file, index) => (
                        <div key={index} className="mt-2 relative">
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="md:w-28 md:h-28 w-14 h-14 object-cover rounded"
                            />
                            <button className='absolute top-0 right-0 mt-[-0.5rem] mr-[-0.5rem] bg-green-600 rounded-full p-1' onClick={() => handleImageCancel(file)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:w-3 w-2 fill-black"
                                    viewBox="0 0 320.591 320.591"
                                >
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"
                                    ></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                {/* <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          Add More
        </button> */}
            </div>
        </div>
    );
};

export default FileUpload;
