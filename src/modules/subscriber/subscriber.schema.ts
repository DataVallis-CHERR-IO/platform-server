import * as Mongoose from 'mongoose'

export const SubscriberSchema = new Mongoose.Schema({
  _id: { type: String, required: true, default: () => new Mongoose.Types.ObjectId().toString() },
  email: { type: String, required: true },
  statusId: { type: Number, required: true },
  subscribedAt: { type: String, required: true },
  unsubscribedAt: { type: String, required: false },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: false }
})
