import React, { useEffect, useState } from 'react';

const FileUpload = ({ setPhotos, photos }) => {
    const [files, setFiles] = useState([]);
    console.log(photos);

    const maxFiles = 4;

    const handleFiles = (newFiles) => {
        const totalFiles = files.length + newFiles.length;

        if (totalFiles > maxFiles) {
            alert(`You can only upload up to ${maxFiles} images.`);
            return;
        }

        const fileArray = Array.from(newFiles).map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setFiles((prevFiles) => [...prevFiles, ...fileArray]);
        setPhotos((prevFiles) => [...prevFiles, ...fileArray.map(item => item.file)]);
    };
    useEffect(() => {
        if (photos.length > 0) {
            const initialFiles = photos.map((photo) => ({
                file: { name: photo.public_id }, // Simulating the file object with a name property
                preview: photo.secure_url,
                isUploaded: true, // This flag helps differentiate between uploaded and new images
            }));
            setFiles(initialFiles);
        }
    }, [photos]);
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        handleFiles(droppedFiles);
    };

    const handleClick = () => {
        if (files.length < maxFiles) {
            document.getElementById('fileInput').click();
        }
    };

    const handleImageCancel = (fileToRemove) => {
        const newArrayFile = files.filter((item) => item.file !== fileToRemove);
        setFiles(newArrayFile);
        setPhotos(newArrayFile.map(item => item.file));
    };

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
                    className={`cursor-pointer p-4 w-full h-40 flex items-center justify-center ${files.length >= maxFiles ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={handleClick}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                >
                    <p className={`text-gray-500 ${files.length >= maxFiles ? 'text-gray-400' : ''}`}>
                        {files.length >= maxFiles ? "Maximum images reached" : "Drag & drop images here or click to select"}
                    </p>
                </div>
                <div id="fileList" className="mt-4 flex flex-wrap justify-start w-full gap-5">
                    {files.map((item, index) => (
                        <div key={index} className="mt-2 relative">
                            <img
                                src={item.preview}
                                alt={item.file.name}
                                className="md:w-28 md:h-28 w-14 h-14 object-cover rounded"
                            />
                            <button
                                className='absolute top-0 right-0 mt-[-0.5rem] mr-[-0.5rem] bg-green-600 rounded-full p-1'
                                onClick={() => handleImageCancel(item.file)}
                            >
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
            </div>
            <p className="mt-2 text-sm text-gray-500">
                {files.length}/{maxFiles} images uploaded.
            </p>
        </div>
    );
};

export default FileUpload;
