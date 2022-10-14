import * as Mongoose from 'mongoose'

export const ProjectMediaSchema = new Mongoose.Schema({
  _id: { type: String, required: true, default: () => new Mongoose.Types.ObjectId().toString() },
  projectId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  path: { type: String, required: true },
  image: { type: String, required: true },
  statusId: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: false },
  deletedAt: { type: String, required: false }
})
