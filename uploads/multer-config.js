// This line imports the Multer library, which is a middleware for handling multipart/form-data, primarily used for uploading files in Node.js.
const multer = require('multer');

// Configuring multer storage options
const storage = multer.diskStorage({
  // Setting the destination folder where files will be saved
  destination: (req, file, cb) => {
    cb(null, 'server/uploads/');
  },
  // Setting the filename for the uploaded file
  filename: (req, file, cb) => {
    // Using Date.now() to create a unique filename
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Function to filter the uploaded files
const fileFilter = (req, file, cb) => {
  // Checking if the file type starts with 'image/'
  if (file.mimetype.startsWith('image/')) {
    // If it is an image file, accept it
    cb(null, true);
  } else {
    // If it is not an image file, reject it with an error
    cb(new Error('Invalid file type'), false);
  }
};

// Configuring multer with the storage and fileFilter options
const upload = multer({ storage, fileFilter });

// Exporting the configured multer upload object
module.exports = upload;
