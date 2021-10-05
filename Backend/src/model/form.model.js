const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    ownerId: { type: String, require: true },
    ownerName: { type: String, require: true },
    commitName: { type: String, require: true },
    repoName: { type: String, require: true },
    codeText: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
