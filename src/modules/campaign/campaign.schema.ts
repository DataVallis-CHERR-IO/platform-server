import * as Mongoose from 'mongoose'

export const CampaignSchema = new Mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  contractAddress: { type: String, required: true },
  image: { type: String, required: true },
  goal: { type: Number, required: true },
  isHighlightedProject: { type: Boolean, required: true },
  statusId: { type: Number, required: true },
  startedAt: { type: Date, required: true },
  endedAt: { type: Date, required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})
