import * as Mongoose from 'mongoose'

export const ProjectSchema = new Mongoose.Schema({
  _id: { type: String, required: true, default: () => new Mongoose.Types.ObjectId().toString() },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  contractAddress: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: false }
})
