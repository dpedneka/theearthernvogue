const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

// Configure AWS SDK
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

// Filter for image file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, and .png files are allowed"), false);
  }
};

// Configure Multer to use S3 for storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "swarshrungarbucket",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const folderName = req.baseUrl?.split("/")[2] || "products";
      cb(
        null,
        `${folderName}/${Date.now().toString()}-${file.originalname.replaceAll(
          " ",
          "-"
        )}`
      ); // Filename as current timestamp + extension
    },
  }),
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter,
});

module.exports = upload;
