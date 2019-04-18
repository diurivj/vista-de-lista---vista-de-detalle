const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beerSchema = new Schema(
  {
    name: String,
    beerType: {
      type: String,
      enum: ['Lager', 'Ale', 'Pale', 'Brown']
    },
    alcoholPercentage: Number,
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Beer', beerSchema)
