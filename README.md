# cloudinary-demo
This is a simple React application that demonstrates how to upload images to Cloudinary and apply transformations to the uploaded images. The demo uses Cloudinary's API to handle image uploads and apply transformations like resizing and cropping.

Features
Image Upload: Users can upload an image from their local device.
Image Transformation: After uploading, the image is automatically transformed using Cloudinary's powerful URL-based transformation features.
Display Transformed Image: The transformed image is displayed on the page.
Getting Started
Prerequisites
Node.js: Ensure that you have Node.js installed on your machine. You can download it from here.
Cloudinary Account: You need a Cloudinary account to use their API. You can sign up for a free account here.

Installation
Clone the repository:

cd cloudinary-react-demo
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root of the project and add your Cloudinary credentials:

env
Copy code
REACT_APP_CLOUD_NAME=your_cloud_name
REACT_APP_UPLOAD_PRESET=your_upload_preset
Replace your_cloud_name with your Cloudinary cloud name and your_upload_preset with the name of the upload preset you created.

Running the Application
To start the application, run:

bash
Copy code
npm start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

Usage
Upload an Image: Click the "Choose File" button to select an image from your local device.
Upload and Transform: Click the "Upload and Transform Image" button to upload the image to Cloudinary. The image will be uploaded, transformed (resized and cropped), and displayed on the page.
Example Transformations
The application demonstrates basic image transformation using the following settings:

Resize: The image is resized to 300x300 pixels.
Crop: The image is cropped to fill the 300x300 area.
These transformations are applied by modifying the URL parameters sent to Cloudinary.

Customizing Transformations
To customize the transformations, you can modify the transformImageUrl function in the ImageUploader component. For example, you can apply different effects, change the resize dimensions, or add filters.

const transformImageUrl = (url) => {
  const transformedUrl = url.replace(
    '/upload/',
    '/upload/w_300,h_300,c_fill/'
  );
  return transformedUrl;
};
Deploying
To deploy this application, you can use any static site hosting service like Netlify, Vercel, or GitHub Pages.

Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License
This project is open source and available under the MIT License.
