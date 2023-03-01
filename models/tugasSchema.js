const mongoose = require("mongoose")
const ObjectId = require('mongodb').ObjectId
let tugasSchema = mongoose.Schema({
  _id: {
	  type: ObjectId,
	  default: ObjectId
  },
  judul: {
    type: String,
	  required: true
  },
  deskripsi: {
    type: String,
    default: ''
  },
  selesai: {
    type: Boolean,
    default: false
  }
},
{ versionKey: false, collection: 'tugas' }
);

module.exports = mongoose.model("tugas", tugasSchema)
