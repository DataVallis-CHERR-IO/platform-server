import * as Mongoose from 'mongoose'

export const CampaignDocumentSchema = new Mongoose.Schema({
  _id: { type: String, required: true },
  campaignId: { type: String, required: true },
  title: { type: String, required: true },
  path: { type: String, required: true },
  icon: { type: String, required: true },
  format: { type: String, required: true },
  statusId: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
  deletedAt: { type: String, required: false }
})
