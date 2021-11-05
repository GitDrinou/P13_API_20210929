const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    userId: String,
    accountId: String,
    description: String,
    amount: String,
    currency: String,
    date: String,
    balance: String,
    type: String,
    categoryId: String,
    notes: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        delete ret.__v
        return ret
      }
    }
  }
)


module.exports = mongoose.model('Transaction', transactionSchema)
