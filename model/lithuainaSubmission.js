// const mongoose = require("mongoose");
// const validator = require("validator");

// const lithuainaSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, "Email address is required."],
//     validate: [validator.isEmail, "Please provide a valid email address."],
//   },
//   phoneNumber: {
//     type: Number,
//     required: [true, "Phone number is required."],
//   },
//   givenName: {
//     type: String,
//     required: [true, "Please provide your first name."],
//     trim: true,
//   },
//   middleName: {
//     type: String,
//     required: [true, "Please provide your middle name."],
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     required: [true, "Please provide your surname."],
//     trim: true,
//   },
//   birthDate: {
//     type: String,
//     required: [true, "Please provide your birth date"],
//     trim: true,
//   },
//   houseAddress: {
//     type: String,
//   },
//   countryOfCitizenship: {
//     type: String,
//     required: [true, "country of citizenship is required."],
//   },
//   immigrationHistory: {
//     type: String,
//     required: true,
//   },
//   visaDenialLetter: {
//     type: String,
//   },
//   visaDenialLetterKey: {
//     type: String,
//   },
//   gender: {
//     type: String,
//     required: [true, "gender is required"],
//     enum: ["male", "female", "prefer_not_to_say"],
//   },
//   experienceLevel: {
//     type: String,
//     required: [true, "experience level is required"],
//     enum: ["skilled", "unskilled"],
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const lithuainaDetails = mongoose.model("lithuainaDetails", lithuainaSchema);

// module.exports = lithuainaDetails;
