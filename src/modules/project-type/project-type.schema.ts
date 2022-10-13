import * as Mongoose from 'mongoose'

export const ProjectTypeSchema = new Mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  lkName: { type: String, required: true },
  statusId: { type: Number, required: true }
})
