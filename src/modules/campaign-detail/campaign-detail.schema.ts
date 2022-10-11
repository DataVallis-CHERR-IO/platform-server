import * as Mongoose from 'mongoose'

export const CampaignDetailSchema = new Mongoose.Schema({
  _id: { type: String, required: true },
  campaignId: { type: String, required: true },
  requirements: { type: String, required: false },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})
