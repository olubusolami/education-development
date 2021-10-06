// const lithuainaDetails = require("../model/lithuainaSubmission");
// const { workSubmission } = require("../validation");
// const path = require("path");
// const multer = require("multer");
// const cloudinary = require("cloudinary");
// cloudinary.config({
//   cloud_name: "olubusola",
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "application/pdf"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// exports.lithuaina = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// exports.lithuainaForm = async (req, res) => {
//   try {
//     //validate before sending details
//     const { error } = workSubmission(
//       req.email,
//       req.phoneNumber,
//       req.givenName,
//       req.middleName,
//       req.lastName,
//       req.birthDate,
//       req.houseAddress,
//       req.gender,
//       req.countryOfCitizenship,
//       req.experienceLevel
//     );
//     if (error) return res.status(400).json(error.details[0].message);

//     let visaDenialLetter;
//     let visaDenialLetterKey;
//     if (req.file) {
//       const result = await cloudinary.v2.uploader.upload(req.file.path);
//       visaDenialLetter = result.secure_url;
//       visaDenialLetterKey = result.public_id;
//     }

//     //detail check
//     const formInfo = await lithuainaDetails.create({
//       email: req.body.email,
//       phoneNumber: req.body.phoneNumber,
//       givenName: req.body.givenName,
//       middleName: req.body.middleName,
//       lastName: req.body.lastName,
//       birthDate: req.body.birthDate,
//       houseAddress: req.body.houseAddress,
//       gender: req.body.gender,
//       immigrationHistory: req.body.immigrationHistory,
//       countryOfCitizenship: req.body.countryOfCitizenship,
//       visaDenialLetter,
//       visaDenialLetterKey,
//       experienceLevel: req.body.experienceLevel,
//     });

//     formInfo.save();

//     return res.status(200).send({ message: "Success", data: formInfo });
//   } catch (error) {
//     return res.status(400).json({ status: "fail", message: error.message });
//   }
// };
