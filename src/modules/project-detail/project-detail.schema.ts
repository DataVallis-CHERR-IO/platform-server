import * as Mongoose from 'mongoose'

export const ProjectDetailSchema = new Mongoose.Schema({
  _id: { type: String, required: true, default: () => new Mongoose.Types.ObjectId().toString() },
  projectId: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: false },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: false }
})
