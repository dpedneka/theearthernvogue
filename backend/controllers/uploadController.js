export const SingleImageUpload = (req, res) => {
  const file = req.file;
  res.status(200).json({
    message: "File uploaded successfully",
    fileUrl: file.location, // S3 file URL
  });
};

export const MultipleImagesUpload = (req, res) => {
  const files = req.files.map((file) => ({
    filename: file.originalname,
    url: file.location, // S3 file URL
  }));
  res.status(200).json({
    message: "Files uploaded successfully",
    files,
  });
};
