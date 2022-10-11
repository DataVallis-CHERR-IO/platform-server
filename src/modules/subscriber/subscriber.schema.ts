import * as Mongoose from 'mongoose'

export const SubscriberSchema = new Mongoose.Schema({
  email: { type: String, required: true },
  statusId: { type: Number, required: true },
  subscribedAt: { type: String, required: true }
})
