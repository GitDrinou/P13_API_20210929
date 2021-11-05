const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema(
  {
    userId: String,
    type: String,
    accountNumber: String,
    amount: String,
    currency: String,
    status: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Account', accountSchema)
