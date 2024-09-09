import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const transformImageUrl = (url) => {
    // Example: Resize image to 300x300, crop to fill
    const transformedUrl = url.replace(
      '/upload/',
      '/upload/w_300,h_300,c_fill/'
    );
    return transformedUrl;
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'react-demo-upload');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dh04hfcqf/image/upload',
        formData
      );

      // Transform the uploaded image URL
      const transformedUrl = transformImageUrl(response.data.secure_url);
      setUploadedImageUrl(transformedUrl);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload and Transform Image</button>
      {uploadedImageUrl && (
        <div>
          <h3>Transformed Image:</h3>
          <img src={uploadedImageUrl} alt="Transformed" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
